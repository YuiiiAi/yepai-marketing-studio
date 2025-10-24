import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast, Toaster } from "sonner";
import {
  MessageSquare,
  Clock,
  FolderOpen,
  Users,
  Settings,
  Sparkles,
  ChevronRight,
  Loader2,
  Download,
  RefreshCw,
  Send,
  Image as ImageIcon,
  Type,
  Palette,
  User,
  CheckCircle2,
  Circle,
  Paperclip,
  Mic,
  Zap,
  Link,
  TrendingUp,
  BarChart3,
  Eye,
  Target,
  Calendar,
  ArrowRight,
  X,
  FileText,
  Upload,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Progress } from "./components/ui/progress";
import { ScrollArea } from "./components/ui/scroll-area";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { Checkbox } from "./components/ui/checkbox";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";

type Stage =
  | "platform-analysis"
  | "user-analysis"
  | "brand-analysis"
  | "text-generation"
  | "image-generation"
  | "final-output";
type MessageType = "user" | "ai" | "system";

interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  actions?: string[];
}

interface Project {
  id: string;
  name: string;
  lastModified: Date;
}

const stages: { id: Stage; name: string; icon: any }[] = [
  {
    id: "platform-analysis",
    name: "Platform Analysis",
    icon: Target,
  },
  { id: "user-analysis", name: "User Analysis", icon: User },
  {
    id: "brand-analysis",
    name: "Brand Analysis",
    icon: Palette,
  },
  {
    id: "text-generation",
    name: "Copywriting Generation",
    icon: Type,
  },
  {
    id: "image-generation",
    name: "Image Generation",
    icon: ImageIcon,
  },
  {
    id: "final-output",
    name: "Final Output",
    icon: CheckCircle2,
  },
];

const examplePromptTemplates = [
  {
    title: "Branding Kit",
    icon: Palette,
    template:
      "Create a complete branding kit for [brand_name] focused on [industry/niche], targeting [audience]. Include [color_palette] colors with a [visual_style] aesthetic. Design elements should convey [brand_personality] and include [deliverables_list].",
    fields: {
      brandName: "",
      industryNiche: "",
      audience: "",
      colorPalette: "",
      visualStyle: "",
      brandPersonality: "",
      deliverablesList: "",
    },
  },
  {
    title: "Blog Post",
    icon: Type,
    template:
      "Write a comprehensive blog post for [brand_name] about [topic or campaign_goal], targeting [audience]. Use a [tone_style] tone with [word_count] words. Include [key_points] and end with a clear [call_to_action].",
    fields: {
      brandName: "",
      topicOrCampaignGoal: "",
      audience: "",
      toneStyle: "",
      wordCount: "",
      keyPoints: "",
      callToAction: "",
    },
  },
  {
    title: "Instagram Post",
    icon: ImageIcon,
    template:
      "Create an engaging Instagram post for [brand_name] about [topic or campaign_goal], targeting [audience]. Use a [tone_style] tone and [visual_style] aesthetic, ending with a clear [call_to_action].",
    fields: {
      brandName: "",
      topicOrCampaignGoal: "",
      audience: "",
      toneStyle: "",
      visualStyle: "",
      callToAction: "",
    },
  },
  {
    title: "Product Images",
    icon: ImageIcon,
    template:
      "Generate professional product images for [product_name] showcasing [key_features]. Style should be [visual_style] with [background_type] background. Target [audience] and highlight [unique_selling_point].",
    fields: {
      productName: "",
      keyFeatures: "",
      visualStyle: "",
      backgroundType: "",
      audience: "",
      uniqueSellingPoint: "",
    },
  },
  {
    title: "Promotional Banner",
    icon: Sparkles,
    template:
      "Design a promotional banner for [campaign_name] promoting [offer/product]. Target [audience] with [dimensions] size. Use [color_scheme] colors and [visual_style] aesthetic. Include [headline_text] and [call_to_action].",
    fields: {
      campaignName: "",
      offerProduct: "",
      audience: "",
      dimensions: "",
      colorScheme: "",
      visualStyle: "",
      headlineText: "",
      callToAction: "",
    },
  },
  {
    title: "Custom",
    icon: Zap,
    template:
      "Create custom marketing content for [brand_name] with [specific_requirements]. Target [audience] using [tone_style] tone. Include [deliverables] and optimize for [platform/channel]. End with [call_to_action].",
    fields: {
      brandName: "",
      specificRequirements: "",
      audience: "",
      toneStyle: "",
      deliverables: "",
      platformChannel: "",
      callToAction: "",
    },
  },
];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [workflowStarted, setWorkflowStarted] = useState(false);
  const [currentStage, setCurrentStage] = useState<Stage>(
    "platform-analysis",
  );
  const [viewingStage, setViewingStage] = useState<Stage>(
    "platform-analysis",
  ); // Track what user is viewing
  const [completedStages, setCompletedStages] = useState<
    Stage[]
  >([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    string | null
  >(null);
  const [showExampleTemplates, setShowExampleTemplates] =
    useState(true); // Default expanded
  const [showTemplateModal, setShowTemplateModal] =
    useState(false);
  const [selectedTemplate, setSelectedTemplate] =
    useState<any>(null);
  const [showPublishModal, setShowPublishModal] =
    useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<
    string[]
  >([]);
  const [messageCount, setMessageCount] = useState(0); // Track message count for stage progression
  const [showBrandUploadModal, setShowBrandUploadModal] =
    useState(false); // Brand asset upload modal
  const [uploadedFiles, setUploadedFiles] = useState<File[]>(
    [],
  );
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [generatedTextContent, setGeneratedTextContent] =
    useState(
      "Carry your values with style. Our eco-friendly tote bags combine conscious design with everyday elegance. Crafted from sustainable materials, each bag tells a story of mindful living. Perfect for the modern creator who cares about the planet.",
    );
  const [generatedImages, setGeneratedImages] = useState([
    "https://images.unsplash.com/photo-1623904492371-ffa09c010f92?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1694531604356-3e98c0caee3b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1656182806674-f631457519dd?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?w=400&h=400&fit=crop",
  ]);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "1",
      name: "Eco-Friendly Tote Bags",
      lastModified: new Date(),
    },
    {
      id: "2",
      name: "Instagram Campaign",
      lastModified: new Date(Date.now() - 86400000),
    },
    {
      id: "3",
      name: "Product Launch",
      lastModified: new Date(Date.now() - 172800000),
    },
  ];

  // Calculate progress based on latest activated stage (currentStage)
  const getStageProgress = () => {
    if (!workflowStarted) return 0;
    const stageIndex = stages.findIndex(
      (s) => s.id === currentStage,
    );
    const progressMap = [16, 32, 48, 64, 80, 100];
    return progressMap[stageIndex] || 0;
  };

  const stageProgress = getStageProgress();

  // Get the latest activated stage (furthest stage reached)
  const latestStage = currentStage;

  const advanceToNextStage = () => {
    const currentIndex = stages.findIndex(
      (s) => s.id === currentStage,
    );
    if (currentIndex < stages.length - 1) {
      const nextStage = stages[currentIndex + 1].id;
      setCompletedStages((prev) => [...prev, currentStage]);
      setCurrentStage(nextStage);
      toast.success(
        `${stages[currentIndex + 1].name} generated`,
      );
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isProcessing) return;

    // Start workflow on first message
    if (!workflowStarted) {
      setWorkflowStarted(true);
      const welcomeMessage: Message = {
        id: "0",
        type: "ai",
        content:
          "Perfect! Let me start by analyzing your target platform and audience insights.",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setShowExampleTemplates(false);
    setIsProcessing(true);

    // Increment message count
    const nextMessageCount = messageCount + 1;
    setMessageCount(nextMessageCount);

    // Simulate AI processing and auto-advance to next stage
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content:
          "Great! I'll analyze your requirements and create personalized content for your target audience.",
        timestamp: new Date(),
        actions: ["Regenerate", "Send to Preview"],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsProcessing(false);

      // Auto-advance to next stage based on message count (only one stage per message)
      setTimeout(() => {
        // Stage progression: 1st message → Platform Analysis (16%)
        // 2nd → User Analysis (32%), 3rd → Brand Analysis (48%), 4th → Text (64%), 5th → Image (80%), 6th → Final (100%)
        if (nextMessageCount === 1) {
          // First message: Activate Platform Analysis (16%)
          setCompletedStages(["platform-analysis"]);
          setCurrentStage("platform-analysis");
          setViewingStage("platform-analysis");
          toast.success("Platform Analysis completed");
        } else if (nextMessageCount === 2) {
          // Second message: Activate User Analysis (32%)
          setCompletedStages([
            "platform-analysis",
            "user-analysis",
          ]);
          setCurrentStage("user-analysis");
          setViewingStage("user-analysis");
          toast.success("User Analysis completed");
        } else if (nextMessageCount === 3) {
          // Third message: Activate Brand Analysis (48%), show upload modal
          setCompletedStages([
            "platform-analysis",
            "user-analysis",
            "brand-analysis",
          ]);
          setCurrentStage("brand-analysis");
          setViewingStage("brand-analysis");
          setShowBrandUploadModal(true); // Show brand asset upload modal
          toast.success("Brand Analysis completed");
        } else if (nextMessageCount === 4) {
          // Fourth message: Activate Text Generation (64%)
          setCompletedStages([
            "platform-analysis",
            "user-analysis",
            "brand-analysis",
            "text-generation",
          ]);
          setCurrentStage("text-generation");
          setViewingStage("text-generation");
          toast.success("Text Generation completed");
        } else if (nextMessageCount === 5) {
          // Fifth message: Activate Image Generation (80%)
          setCompletedStages([
            "platform-analysis",
            "user-analysis",
            "brand-analysis",
            "text-generation",
            "image-generation",
          ]);
          setCurrentStage("image-generation");
          setViewingStage("image-generation");
          toast.success("Image Generation completed");
        } else if (nextMessageCount === 6) {
          // Sixth message: Activate Final Output (100%)
          setCompletedStages([
            "platform-analysis",
            "user-analysis",
            "brand-analysis",
            "text-generation",
            "image-generation",
            "final-output",
          ]);
          setCurrentStage("final-output");
          setViewingStage("final-output");
          toast.success("Final Output ready");
        }
      }, 1000);
    }, 2000);
  };

  const handleExampleTemplate = (template: string) => {
    setInputValue(template);
    setShowExampleTemplates(false);
    inputRef.current?.focus();
  };

  const handleOpenTemplateModal = (template: any) => {
    setSelectedTemplate(template);
    setShowTemplateModal(true);
  };

  const handleSubmitTemplateForm = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let message = selectedTemplate.template;

    Object.keys(selectedTemplate.fields).forEach((key) => {
      const value = formData.get(key) as string;
      const placeholder = `[${key.replace(/([A-Z])/g, "_$1").toLowerCase()}]`;
      message = message.replace(
        placeholder,
        value || placeholder,
      );
    });

    setInputValue(message);
    setShowTemplateModal(false);
    setSelectedTemplate(null);
    setShowExampleTemplates(false);
    inputRef.current?.focus();
  };

  const handleRegenerateText = () => {
    const regeneratedTexts = [
      "Carry your values with style. Our eco-friendly tote bags combine conscious design with everyday elegance. Crafted from sustainable materials, each bag tells a story of mindful living. Perfect for the modern creator who cares about the planet.",
      "Sustainable style meets everyday function. These eco-friendly tote bags are designed for those who care deeply about the planet while maintaining impeccable taste. Each piece is thoughtfully crafted from recycled materials.",
      "Make a statement without saying a word. Our collection of sustainable tote bags blends minimalist design with environmental responsibility. Perfect for the conscious consumer who values both aesthetics and ethics.",
    ];
    const randomIndex = Math.floor(
      Math.random() * regeneratedTexts.length,
    );
    setGeneratedTextContent(regeneratedTexts[randomIndex]);
    toast.success("Text regenerated successfully!");
  };

  const handleRegenerateImage = (index: number) => {
    const newImages = [...generatedImages];
    const imagePool = [
      "https://images.unsplash.com/photo-1623904492371-ffa09c010f92?w=800&h=1000&fit=crop&v=",
      "https://images.unsplash.com/photo-1694531604356-3e98c0caee3b?w=800&h=1000&fit=crop&v=",
      "https://images.unsplash.com/photo-1656182806674-f631457519dd?w=800&h=1000&fit=crop&v=",
      "https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?w=800&h=1000&fit=crop&v=",
    ];
    newImages[index] =
      imagePool[Math.floor(Math.random() * imagePool.length)] +
      Date.now();
    setGeneratedImages(newImages);
    toast.success("Image regenerated successfully!");
  };

  const handlePublish = () => {
    if (selectedPlatforms.length === 0) {
      toast.error("Please select at least one platform");
      return;
    }
    toast.success(
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4" />
        <span>
          Content Published Successfully to{" "}
          {selectedPlatforms.join(", ")}
        </span>
      </div>,
    );
    setShowPublishModal(false);
    setSelectedPlatforms([]);
  };

  const handleStageClick = (stageId: Stage) => {
    // Allow viewing any completed stage or the current active stage
    if (
      completedStages.includes(stageId) ||
      currentStage === stageId
    ) {
      setViewingStage(stageId);
    }
  };

  const handleQuickAction = (action: string) => {
    if (action === "Regenerate") {
      toast.success("Regenerating content...");
    } else if (action === "Send to Preview") {
      toast.success("Sent to preview panel");
    }
  };

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop =
        chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      const newHeight = Math.min(
        inputRef.current.scrollHeight,
        96,
      ); // 4 lines max
      inputRef.current.style.height = `${newHeight}px`;
    }
  }, [inputValue]);

  // Welcome Page
  if (showWelcome) {
    return (
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-[#C8B6FF] to-[#A0E9FF] flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl w-full"
          >
            {/* Logo and Tagline */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center shadow-2xl mx-auto">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] bg-clip-text text-transparent not-italic px-[0px] py-[10px]">
                YepAI Marketing Studio
              </h1>
              <p className="text-2xl text-slate-600 mb-8">
                Turn Ideas into Impact — Create, Refine &
                Publish with AI
              </p>
            </div>

            {/* CTA Button - Moved up */}
            <div className="text-center mb-10">
              <Button
                onClick={() => setShowWelcome(false)}
                size="lg"
                className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] hover:from-[#6a42da] hover:to-[#8a62ea] text-white px-12 py-6 text-lg shadow-2xl hover:shadow-xl transition-all"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                Start Your Creative Journey
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>

            {/* Feature Cards - Reduced size by 25% */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Multi-Agent Collaboration
                </h3>
                <p className="text-sm text-slate-600">
                  Coordinated AI workflow with specialized
                  agents for platform analysis, brand insights,
                  and content generation.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#459aff] to-[#3a8ae6] flex items-center justify-center mb-3">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Unified Design & Copy Generation
                </h3>
                <p className="text-sm text-slate-600">
                  Seamlessly integrate text and visual content
                  with brand-aligned AI generation for
                  consistent messaging.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Performance Feedback Loop
                </h3>
                <p className="text-sm text-slate-600">
                  Learn from real campaign data with automated
                  insights to continuously improve your
                  marketing outcomes.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffa500] to-[#ff8c00] flex items-center justify-center mb-3">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Cloud Storage & History
                </h3>
                <p className="text-sm text-slate-600">
                  Access your projects anywhere with secure
                  cloud storage. Revisit past campaigns and
                  share with your team.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <Toaster position="top-right" />
        </div>
      </TooltipProvider>
    );
  }

  // Main Workspace
  return (
    <TooltipProvider>
      <div className="h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white flex items-center justify-center p-5">
        <div className="max-w-[1440px] w-full h-[calc(100vh-40px)] flex gap-5">
          {/* Left Sidebar */}
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            className="w-[260px] flex-shrink-0 bg-slate-50 rounded-[24px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold">
                    YepAI Studio
                  </h2>
                  <p className="text-[12px] text-slate-500">
                    Marketing AI
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <ScrollArea className="flex-1">
              <div className="p-5 space-y-6">
                {/* Recent Projects */}
                <div>
                  <p className="text-[12px] font-medium text-slate-500 mb-3 uppercase tracking-wide">
                    Recent Projects
                  </p>
                  <div className="space-y-2">
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() =>
                          setSelectedProject(project.id)
                        }
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-[14px] text-[14px] transition-colors ${
                          selectedProject === project.id
                            ? "bg-white shadow-sm"
                            : "hover:bg-white/50"
                        }`}
                      >
                        <FolderOpen className="w-4 h-4" />
                        <span className="truncate">
                          {project.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation Items */}
                <div>
                  <p className="text-[12px] font-medium text-slate-500 mb-3 uppercase tracking-wide">
                    Tools
                  </p>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-[14px] text-[14px] hover:bg-white/50 transition-colors">
                      <Clock className="w-4 h-4" />
                      <span>History</span>
                    </button>
                    <button 
                      onClick={() => setShowAnalytics(true)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-[14px] text-[14px] transition-colors ${
                        showAnalytics 
                          ? "bg-white shadow-sm" 
                          : "hover:bg-white/50"
                      }`}
                    >
                      <BarChart3 className="w-4 h-4" />
                      <span>Analytics</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-[14px] text-[14px] hover:bg-white/50 transition-colors">
                      <Palette className="w-4 h-4" />
                      <span>Brand Assets</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-[14px] text-[14px] hover:bg-white/50 transition-colors">
                      <Users className="w-4 h-4" />
                      <span>Team</span>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Bottom Section */}
            <div className="p-5 border-t border-slate-200">
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-[14px] text-[14px] hover:bg-white/50 transition-colors mb-4">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
              <div className="flex items-center gap-3 px-3">
                <Avatar className="w-10 h-10 shadow-sm">
                  <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" />
                  <AvatarFallback>NC</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold truncate">
                    Natalie Chen
                  </p>
                  <p className="text-[12px] text-slate-500 truncate">
                    create@YepAI.com
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Analytics Dashboard View */}
          {showAnalytics ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col"
            >
              <div className="bg-slate-50 rounded-[24px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] h-full flex flex-col overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-slate-200 bg-white rounded-t-[24px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowAnalytics(false)}
                        className="hover:bg-slate-100"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180 mr-2" />
                        Back to Main View
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Analytics Content */}
                <ScrollArea className="flex-1">
                  <div className="p-8 space-y-6">
                    <AnalyticsDashboard />
                  </div>
                </ScrollArea>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Center Chat Area */}
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-[450px] flex-shrink-0 flex flex-col"
              >
            <div className="bg-slate-50 rounded-[24px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] flex flex-col h-full overflow-hidden">
              {/* Chat Header */}
              <div className="p-6 border-b border-slate-200 bg-white rounded-t-[24px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center shadow-sm">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-[24px] tracking-tight">
                      Chat With YepAI
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] hover:from-[#6a42da] hover:to-[#8a62ea] shadow-md"
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      Upgrade
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-hidden relative">
                <div
                  ref={chatScrollRef}
                  className="h-full overflow-y-auto p-6"
                >
                  <div className="space-y-4">
                    {messages.length === 0 &&
                      !workflowStarted && (
                        <div className="text-center py-12">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Sparkles className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            Welcome to YepAI Studio
                          </h3>
                          <p className="text-slate-600 mb-6">
                            Start by describing your marketing
                            needs or choose a template below.
                          </p>
                        </div>
                      )}

                    <AnimatePresence mode="popLayout">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`flex gap-3 ${message.type === "user" ? "justify-end" : ""}`}
                        >
                          {message.type !== "user" && (
                            <Avatar className="w-10 h-10 flex-shrink-0">
                              <div className="w-full h-full bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center shadow-sm">
                                <Sparkles className="w-5 h-5 text-white" />
                              </div>
                            </Avatar>
                          )}
                          <div
                            className={`flex-1 max-w-[80%] ${message.type === "user" ? "flex justify-end" : ""}`}
                          >
                            <div
                              className={`rounded-[14px] p-4 shadow-sm ${
                                message.type === "user"
                                  ? "bg-[#d6dcf3] text-black"
                                  : message.type === "ai"
                                    ? "bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] text-white"
                                    : "bg-slate-100 text-slate-700 border border-slate-200"
                              }`}
                            >
                              <p className="text-[15px] leading-relaxed">
                                {message.content}
                              </p>
                              {message.actions && (
                                <div className="flex gap-2 mt-3">
                                  {message.actions.map(
                                    (action) => (
                                      <Button
                                        key={action}
                                        size="sm"
                                        variant="secondary"
                                        onClick={() =>
                                          handleQuickAction(
                                            action,
                                          )
                                        }
                                        className="h-7 text-xs bg-white/20 hover:bg-white/30 text-white border-white/30"
                                      >
                                        {action}
                                      </Button>
                                    ),
                                  )}
                                </div>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-1.5 px-1">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                          {message.type === "user" && (
                            <Avatar className="w-10 h-10 flex-shrink-0 shadow-sm">
                              <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" />
                              <AvatarFallback>
                                NC
                              </AvatarFallback>
                            </Avatar>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {isProcessing && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3"
                      >
                        <Avatar className="w-10 h-10 shadow-sm">
                          <div className="w-full h-full bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center">
                            <Loader2 className="w-5 h-5 text-white animate-spin" />
                          </div>
                        </Avatar>
                        <div className="bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] text-white rounded-[14px] p-4 shadow-sm">
                          <div className="flex gap-2">
                            <div
                              className="w-2 h-2 bg-white rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            />
                            <div
                              className="w-2 h-2 bg-white rounded-full animate-bounce"
                              style={{
                                animationDelay: "150ms",
                              }}
                            />
                            <div
                              className="w-2 h-2 bg-white rounded-full animate-bounce"
                              style={{
                                animationDelay: "300ms",
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Input Area - Fixed at bottom */}
              <div className="border-t border-slate-200 bg-slate-50">
                {/* Example Prompt Templates */}
                <AnimatePresence>
                  {showExampleTemplates && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 border-b border-slate-200 bg-white/50"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#7b53eb]" />
                          <p className="text-sm font-medium text-slate-700">
                            Example Prompt Templates
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setSelectedTemplate(null);
                              setShowTemplateModal(true);
                            }}
                            className="h-7 text-xs px-3 border-[#7b53eb] text-[#7b53eb] hover:bg-[#7b53eb] hover:text-white"
                          >
                            <FileText className="w-3 h-3 mr-1" />
                            Use Form
                          </Button>
                          <button
                            onClick={() =>
                              setShowExampleTemplates(false)
                            }
                            className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
                          >
                            Hide
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {examplePromptTemplates.map(
                          (item, idx) => (
                            <motion.button
                              key={idx}
                              whileHover={{
                                scale: 1.01,
                                y: -1,
                              }}
                              onClick={() =>
                                handleExampleTemplate(
                                  item.template,
                                )
                              }
                              className="w-full text-left p-3 bg-white border border-slate-200 rounded-[10px] hover:border-[#7b53eb] hover:shadow-sm transition-all group"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-lg bg-[#7b53eb]/10 flex items-center justify-center flex-shrink-0">
                                  <item.icon className="w-3.5 h-3.5 text-[#7b53eb]" />
                                </div>
                                <p className="text-xs font-semibold text-slate-800">
                                  {item.title}
                                </p>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 group-hover:text-slate-700 transition-colors">
                                {item.template}
                              </p>
                            </motion.button>
                          ),
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input Box */}
                <div className="p-4">
                  <div className="flex gap-2 items-end">
                    <div className="flex-1 flex flex-col gap-2 px-3 py-2.5 rounded-[12px] border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-[#7b53eb] focus-within:border-[#7b53eb] transition-all shadow-sm">
                      <div className="flex items-center gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                              <Paperclip className="w-4 h-4 text-slate-500 hover:text-slate-700" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            Upload file (images, PDFs, brand
                            kits)
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                              <Link className="w-4 h-4 text-slate-500 hover:text-slate-700" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            Add URL or link
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                              <Mic className="w-4 h-4 text-slate-500 hover:text-slate-700" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            Voice input
                          </TooltipContent>
                        </Tooltip>

                        <div className="w-px h-5 bg-slate-200" />

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() =>
                                setShowExampleTemplates(
                                  !showExampleTemplates,
                                )
                              }
                              className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors ml-auto"
                            >
                              <Sparkles className="w-4 h-4 text-[#7b53eb]" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            Example Prompt Templates
                          </TooltipContent>
                        </Tooltip>
                      </div>

                      <textarea
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) =>
                          setInputValue(e.target.value)
                        }
                        onKeyPress={(e) => {
                          if (
                            e.key === "Enter" &&
                            !e.shiftKey
                          ) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        placeholder="Describe your marketing needs in detail..."
                        className="flex-1 outline-none text-[14px] placeholder:text-slate-400 resize-none min-h-[24px] max-h-[96px]"
                        disabled={isProcessing}
                        rows={1}
                      />
                    </div>

                    <Button
                      onClick={handleSendMessage}
                      disabled={
                        !inputValue.trim() || isProcessing
                      }
                      className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] hover:from-[#6a42da] hover:to-[#8a62ea] px-6 shadow-md disabled:opacity-50 h-auto py-2.5"
                    >
                      {isProcessing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.main>

          {/* Right Preview Area */}
          <motion.section
            initial={{ x: 650 }}
            animate={{ x: 0 }}
            className="flex-1 flex flex-col"
          >
            <div className="bg-slate-50 rounded-[24px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] h-full flex flex-col overflow-hidden">
              {/* Stage Content - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-8 pb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={viewingStage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {!workflowStarted && <StageWelcome />}
                      {workflowStarted &&
                        viewingStage ===
                          "platform-analysis" && (
                          <StagePlatformAnalysis />
                        )}
                      {viewingStage === "user-analysis" && (
                        <StageUserAnalysis />
                      )}
                      {viewingStage === "brand-analysis" && (
                        <StageBrandAnalysis />
                      )}
                      {viewingStage === "text-generation" && (
                        <StageTextGeneration
                          content={generatedTextContent}
                          onRegenerate={handleRegenerateText}
                        />
                      )}
                      {viewingStage === "image-generation" && (
                        <StageImageGeneration
                          images={generatedImages}
                          onRegenerateImage={
                            handleRegenerateImage
                          }
                        />
                      )}
                      {viewingStage === "final-output" && (
                        <StageFinalOutput
                          onPublish={() =>
                            setShowPublishModal(true)
                          }
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Interactive Progress Bar - Fixed at bottom - Always visible */}
              <div className="p-5 border-t border-slate-200 bg-white shadow-[0px_-4px_12px_0px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between mb-4">
                  {stages.map((stage, index) => {
                    const isCurrentStage =
                      currentStage === stage.id;
                    const isViewingStage =
                      viewingStage === stage.id;
                    const isCompleted =
                      completedStages.includes(stage.id);
                    const isAccessible =
                      isCompleted || isCurrentStage;

                    return (
                      <Tooltip key={stage.id}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() =>
                              handleStageClick(stage.id)
                            }
                            className={`flex flex-col items-center gap-1.5 transition-all ${
                              workflowStarted && isViewingStage
                                ? "scale-110"
                                : workflowStarted &&
                                    isAccessible
                                  ? "opacity-100 hover:scale-105"
                                  : "opacity-50 cursor-not-allowed"
                            }`}
                            disabled={
                              !workflowStarted || !isAccessible
                            }
                          >
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md ${
                                !workflowStarted
                                  ? "bg-[#d9d9d9]"
                                  : stage.id === "final-output"
                                    ? isCompleted
                                      ? "bg-gradient-to-br from-[#ffa500] to-[#ff8c00]"
                                      : "bg-[#d9d9d9]"
                                    : isCurrentStage &&
                                        !isCompleted
                                      ? "bg-gradient-to-br from-[#7b53eb] to-[#9b73fb]"
                                      : isCompleted
                                        ? "bg-gradient-to-br from-[#459aff] to-[#3a8ae6]"
                                        : "bg-[#d9d9d9]"
                              } ${isViewingStage && workflowStarted ? "ring-2 ring-[#7b53eb] ring-offset-2" : ""}`}
                            >
                              {workflowStarted &&
                              isCompleted ? (
                                <CheckCircle2 className="w-5 h-5 text-white" />
                              ) : (
                                <stage.icon className="w-5 h-5 text-white" />
                              )}
                            </div>
                            <span className="text-[10px] font-medium text-slate-600">
                              {stage.name.split(" ")[0]}
                            </span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p className="font-medium">
                            {stage.name}
                          </p>
                          {!workflowStarted && (
                            <Badge
                              variant="secondary"
                              className="mt-1"
                            >
                              Not Started
                            </Badge>
                          )}
                          {workflowStarted && isCompleted && (
                            <Badge
                              variant="secondary"
                              className="mt-1"
                            >
                              Completed
                            </Badge>
                          )}
                          {workflowStarted &&
                            isCurrentStage &&
                            !isCompleted && (
                              <Badge className="mt-1 bg-[#7b53eb]">
                                Active
                              </Badge>
                            )}
                          {workflowStarted &&
                            isViewingStage &&
                            viewingStage !== currentStage && (
                              <Badge className="mt-1 bg-slate-500">
                                Viewing
                              </Badge>
                            )}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
                <Progress
                  value={stageProgress}
                  className="h-2.5 bg-slate-200"
                />
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  {workflowStarted ? (
                    <>
                      <span>
                        Stage{" "}
                        {stages.findIndex(
                          (s) => s.id === currentStage,
                        ) + 1}{" "}
                        of {stages.length}
                      </span>
                      <span>
                        {Math.round(stageProgress)}% Complete
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Stage 0 of {stages.length}</span>
                      <span>0% Complete</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
            </>
          )}
        </div>

        {/* Template Form Modal */}
        <Dialog
          open={showTemplateModal}
          onOpenChange={setShowTemplateModal}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Type className="w-5 h-5 text-[#7b53eb]" />
                Template Form Builder
              </DialogTitle>
              <DialogDescription>
                Fill out the form fields to generate a
                customized marketing prompt
              </DialogDescription>
            </DialogHeader>

            {/* Template Selector */}
            {!selectedTemplate && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600">
                  Select a template to fill out the form:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {examplePromptTemplates.map((template) => (
                    <button
                      key={template.title}
                      onClick={() =>
                        setSelectedTemplate(template)
                      }
                      className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-[12px] hover:border-[#7b53eb] hover:shadow-sm transition-all text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#7b53eb]/10 flex items-center justify-center flex-shrink-0">
                        <template.icon className="w-5 h-5 text-[#7b53eb]" />
                      </div>
                      <p className="font-medium text-[14px]">
                        {template.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Template Form */}
            {selectedTemplate && (
              <form
                onSubmit={handleSubmitTemplateForm}
                className="space-y-4"
              >
                <div className="flex items-center justify-between p-3 bg-[#7b53eb]/5 rounded-[10px] border border-[#7b53eb]/20">
                  <div className="flex items-center gap-2">
                    <selectedTemplate.icon className="w-4 h-4 text-[#7b53eb]" />
                    <span className="font-medium text-sm">
                      {selectedTemplate.title}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTemplate(null)}
                    className="text-xs text-[#7b53eb] hover:text-[#6a42da]"
                  >
                    Change Template
                  </button>
                </div>

                {Object.keys(selectedTemplate.fields).map(
                  (key) => (
                    <div key={key} className="space-y-2">
                      <Label
                        htmlFor={key}
                        className="text-sm font-medium"
                      >
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) =>
                            str.toUpperCase(),
                          )}
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id={key}
                          name={key}
                          placeholder={`Enter ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`}
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="px-3"
                          onClick={() =>
                            toast.info(
                              "File upload coming soon!",
                            )
                          }
                        >
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ),
                )}
                <div className="flex gap-2 justify-end pt-4 border-t border-slate-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowTemplateModal(false);
                      setSelectedTemplate(null);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb]"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Prompt
                  </Button>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Publish Modal - Enhanced */}
        <Dialog
          open={showPublishModal}
          onOpenChange={setShowPublishModal}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#7b53eb]" />
                Publish to Platforms
              </DialogTitle>
              <DialogDescription>
                Select connected accounts to publish your
                marketing campaign
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Select connected accounts to publish your
                campaign:
              </p>

              {/* Platform Account Cards */}
              <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2">
                {[
                  {
                    platform: "Instagram",
                    icon: ImageIcon,
                    username: "@brand_official",
                    color: "from-purple-500 to-pink-500",
                    avatar:
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                  },
                  {
                    platform: "TikTok",
                    icon: ImageIcon,
                    username: "@brand.studio",
                    color: "from-black to-gray-800",
                    avatar:
                      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
                  },
                  {
                    platform: "LinkedIn",
                    icon: Users,
                    username: "Brand Marketing",
                    color: "from-blue-600 to-blue-700",
                    avatar:
                      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
                  },
                  {
                    platform: "Facebook",
                    icon: Users,
                    username: "Brand Official Page",
                    color: "from-blue-500 to-blue-600",
                    avatar:
                      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
                  },
                  {
                    platform: "Twitter",
                    icon: MessageSquare,
                    username: "@BrandOfficial",
                    color: "from-sky-400 to-blue-500",
                    avatar:
                      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
                  },
                ].map((account) => (
                  <div
                    key={account.platform}
                    className={`flex items-center gap-4 p-4 bg-white border-2 rounded-[12px] transition-all cursor-pointer ${
                      selectedPlatforms.includes(
                        account.platform,
                      )
                        ? "border-[#7b53eb] bg-[#7b53eb]/5 shadow-md"
                        : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                    }`}
                    onClick={() => {
                      if (
                        selectedPlatforms.includes(
                          account.platform,
                        )
                      ) {
                        setSelectedPlatforms(
                          selectedPlatforms.filter(
                            (p) => p !== account.platform,
                          ),
                        );
                      } else {
                        setSelectedPlatforms([
                          ...selectedPlatforms,
                          account.platform,
                        ]);
                      }
                    }}
                  >
                    <Checkbox
                      id={account.platform}
                      checked={selectedPlatforms.includes(
                        account.platform,
                      )}
                      className="pointer-events-none"
                    />

                    <Avatar className="w-10 h-10 flex-shrink-0 shadow-sm">
                      <AvatarImage src={account.avatar} />
                      <AvatarFallback>
                        <div
                          className={`w-full h-full rounded-full bg-gradient-to-br ${account.color} flex items-center justify-center`}
                        >
                          <account.icon className="w-5 h-5 text-white" />
                        </div>
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[14px] text-slate-800">
                        {account.platform}
                      </p>
                      <p className="text-[13px] text-slate-500 truncate">
                        {account.username}
                      </p>
                    </div>

                    {selectedPlatforms.includes(
                      account.platform,
                    ) && (
                      <CheckCircle2 className="w-5 h-5 text-[#7b53eb] flex-shrink-0" />
                    )}
                  </div>
                ))}

                {/* Add Account Button */}
                <button
                  className="flex items-center justify-center gap-2 p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-[12px] hover:border-[#7b53eb] hover:bg-[#7b53eb]/5 transition-all text-slate-600 hover:text-[#7b53eb]"
                  onClick={() =>
                    toast.info(
                      "Account connection feature coming soon!",
                    )
                  }
                >
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="font-medium">
                    + Add Account
                  </span>
                </button>
              </div>

              <div className="flex gap-2 justify-end pt-4 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={() => setShowPublishModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handlePublish}
                  disabled={selectedPlatforms.length === 0}
                  className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] disabled:opacity-50"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Publish to {selectedPlatforms.length ||
                    0}{" "}
                  Platform
                  {selectedPlatforms.length !== 1 ? "s" : ""}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Brand Asset Upload Modal */}
        <Dialog
          open={showBrandUploadModal}
          onOpenChange={setShowBrandUploadModal}
        >
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#7b53eb]" />
                Insufficient Brand Assets Detected
              </DialogTitle>
              <DialogDescription>
                To complete a more accurate brand analysis,
                please upload your brand assets (logos, style
                guides, or previous campaigns).
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-slate-300 rounded-[12px] p-8 hover:border-[#7b53eb] transition-colors bg-slate-50">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#7b53eb]/10 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-[#7b53eb]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-1">
                      Drag & drop your files here
                    </p>
                    <p className="text-xs text-slate-500">
                      Accepted formats: JPG, PNG, PDF, ZIP
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // Trigger file input
                      const input =
                        document.createElement("input");
                      input.type = "file";
                      input.multiple = true;
                      input.accept =
                        ".jpg,.jpeg,.png,.pdf,.zip";
                      input.onchange = (e: any) => {
                        const files = Array.from(
                          e.target.files || [],
                        );
                        setUploadedFiles(
                          (prev) =>
                            [...prev, ...files] as File[],
                        );
                        toast.success(
                          `${files.length} file(s) added`,
                        );
                      };
                      input.click();
                    }}
                  >
                    <Paperclip className="w-4 h-4 mr-2" />
                    Browse Files
                  </Button>
                </div>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Uploaded Files ({uploadedFiles.length})
                  </Label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200"
                      >
                        <FileText className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        <span className="text-xs text-slate-700 flex-1 truncate">
                          {file.name}
                        </span>
                        <button
                          onClick={() =>
                            setUploadedFiles(
                              uploadedFiles.filter(
                                (_, i) => i !== idx,
                              ),
                            )
                          }
                          className="p-1 hover:bg-slate-200 rounded transition-colors"
                        >
                          <X className="w-3 h-3 text-slate-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Optional Note Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="brand-notes"
                  className="text-sm font-medium"
                >
                  Additional Notes or Links (Optional)
                </Label>
                <Textarea
                  id="brand-notes"
                  placeholder="Add comments or links to online brand assets..."
                  className="resize-none"
                  rows={3}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-end pt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowBrandUploadModal(false);
                    toast.info(
                      "Continuing with existing brand information",
                    );
                  }}
                >
                  Skip for Now
                </Button>
                <Button
                  onClick={() => {
                    setShowBrandUploadModal(false);
                    if (uploadedFiles.length > 0) {
                      toast.success(
                        `${uploadedFiles.length} brand asset(s) uploaded successfully!`,
                      );
                    } else {
                      toast.info(
                        "Continuing with existing brand information",
                      );
                    }
                  }}
                  className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb]"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploadedFiles.length > 0
                    ? "Upload Now"
                    : "Continue"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Toaster position="top-right" />
      </div>
    </TooltipProvider>
  );
}

// Stage Components

function StageWelcome() {
  const categories = [
    {
      title: "Branding Kit",
      icon: Palette,
      image:
        "https://yepstudio.yepai.io/assets/brandingkit-26f35d44.gif?w=100&h=100&fit=crop",
    },
    {
      title: "Blog Post",
      icon: Type,
      image:
        "https://yepstudio.yepai.io/assets/blogpost-3610e982.gif?w=100&h=100&fit=crop",
    },
    {
      title: "Instagram Post",
      icon: ImageIcon,
      image:
        "https://yepstudio.yepai.io/assets/instagrampost-ead2a612.gif?w=100&h=100&fit=crop",
    },
    {
      title: "Product Images",
      icon: ImageIcon,
      image:
        "https://yepstudio.yepai.io/assets/productimage-thumnail-a022730f.gif?w=100&h=100&fit=crop",
    },
    {
      title: "Promotional Banner",
      icon: Sparkles,
      image:
        "https://yepstudio.yepai.io/assets/promotionalbanner-1e6c6b85.gif?w=100&h=100&fit=crop",
    },
    {
      title: "Custom",
      icon: Zap,
      gradient: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center mx-auto mb-4 shadow-lg opacity-60">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-[32px] tracking-tight mb-2">
          Choose Your Creation Type
        </h2>
        <p className="text-sm text-slate-500">
          Select a category or send a message to start the AI
          workflow
        </p>
      </div>

      {/* Category Cards Grid - 2 rows of 3 */}
      <div className="grid grid-cols-3 gap-3">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -2, scale: 1.02 }}
            className="bg-white rounded-[16px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="p-3">
              {/* Image/Gradient Area */}
              <div className="relative aspect-square rounded-[12px] overflow-hidden mb-3">
                {category.gradient ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#d6dcf3] to-[#e5e7fb] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-[#7b53eb]" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {/* Title */}
              <p className="text-[16px] font-medium text-slate-800 text-center">
                {category.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StagePlatformAnalysis() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[32px] tracking-tight mb-1">
            Platform Analysis Report
          </h2>
          <p className="text-sm text-slate-500">
            AI-powered platform and audience insights
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="shadow-sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </div>

      {/* Platform Audience Insights */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Target className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[18px] font-semibold">
            Platform Audience Insights
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#edeefc] to-[#e5e7fb] rounded-[12px] p-5 border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-medium text-slate-600 uppercase tracking-wide">
                Instagram
              </p>
              <ImageIcon className="w-4 h-4 text-[#7b53eb]" />
            </div>
            <p className="text-[28px] font-semibold tracking-tight mb-2">
              1.2M
            </p>
            <p className="text-xs text-slate-600">
              Avg. monthly reach
            </p>
            <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] rounded-full"
                style={{ width: "85%" }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#e6f1fd] to-[#dde9fc] rounded-[12px] p-5 border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-medium text-slate-600 uppercase tracking-wide">
                TikTok
              </p>
              <ImageIcon className="w-4 h-4 text-[#459aff]" />
            </div>
            <p className="text-[28px] font-semibold tracking-tight mb-2">
              890K
            </p>
            <p className="text-xs text-slate-600">
              Avg. monthly reach
            </p>
            <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#459aff] to-[#3a8ae6] rounded-full"
                style={{ width: "68%" }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#edeefc] to-[#e5e7fb] rounded-[12px] p-5 border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-medium text-slate-600 uppercase tracking-wide">
                LinkedIn
              </p>
              <Users className="w-4 h-4 text-[#7b53eb]" />
            </div>
            <p className="text-[28px] font-semibold tracking-tight mb-2">
              420K
            </p>
            <p className="text-xs text-slate-600">
              Avg. monthly reach
            </p>
            <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] rounded-full"
                style={{ width: "45%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Post Formats */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Type className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[18px] font-semibold">
            Recommended Post Formats
          </h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-[10px] border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center flex-shrink-0">
              <ImageIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] mb-1.5 text-slate-800">
                Carousel Posts
              </p>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Best for storytelling and product showcases.
                3-10 images with cohesive narrative.
              </p>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-[#7b53eb]/10 text-[#7b53eb] text-[11px]">
                  Instagram
                </Badge>
                <Badge className="bg-[#7b53eb]/10 text-[#7b53eb] text-[11px]">
                  +45% Engagement
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-[10px] border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#459aff] to-[#3a8ae6] flex items-center justify-center flex-shrink-0">
              <Type className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] mb-1.5 text-slate-800">
                Short-Form Video
              </p>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                15-60 second videos optimized for mobile viewing
                with captions.
              </p>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-[#459aff]/10 text-[#459aff] text-[11px]">
                  TikTok
                </Badge>
                <Badge className="bg-[#459aff]/10 text-[#459aff] text-[11px]">
                  Reels
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Timing */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Calendar className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[18px] font-semibold">
            Optimal Engagement Times
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-[12px] p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#7b53eb]" />
              <p className="text-[13px] font-semibold text-slate-800">
                Weekdays
              </p>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Best: 11AM - 1PM, 7PM - 9PM EST
            </p>
          </div>

          <div className="bg-slate-50 rounded-[12px] p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#459aff]" />
              <p className="text-[13px] font-semibold text-slate-800">
                Weekends
              </p>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Best: 9AM - 11AM, 5PM - 7PM EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StageUserAnalysis() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[32px] tracking-tight mb-1">
            User Analysis Report
          </h2>
          <p className="text-sm text-slate-500">
            AI-powered audience insights from 30-day performance
            data
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="shadow-sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </div>

      {/* Business Overview Section */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <BarChart3 className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[18px] font-semibold">
            Business Overview
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-4 items-stretch">
          <div className="bg-gradient-to-br from-[#edeefc] to-[#e5e7fb] rounded-[12px] p-5 border border-slate-100 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-medium text-slate-600 uppercase tracking-wide">
                Total Views
              </p>
              <Eye className="w-4 h-4 text-[#7b53eb]" />
            </div>
            <p className="text-[32px] font-semibold tracking-tight mb-2">
              7,265
            </p>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-green-600" />
              <span className="text-xs font-medium text-green-700">
                +11.01%
              </span>
              <span className="text-xs text-slate-500">
                vs last period
              </span>
            </div>
            <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] rounded-full"
                style={{ width: "72%" }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#e6f1fd] to-[#dde9fc] rounded-[12px] p-5 border border-slate-100 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-medium text-slate-600 uppercase tracking-wide">
                Engagement
              </p>
              <BarChart3 className="w-4 h-4 text-[#459aff]" />
            </div>
            <p className="text-[32px] font-semibold tracking-tight mb-2">
              3,671
            </p>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-red-600 rotate-180" />
              <span className="text-xs font-medium text-red-700">
                -0.03%
              </span>
              <span className="text-xs text-slate-500">
                vs last period
              </span>
            </div>
            <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#459aff] to-[#3a8ae6] rounded-full"
                style={{ width: "50%" }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#edeefc] to-[#e5e7fb] rounded-[12px] p-5 border border-slate-100 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-medium text-slate-600 uppercase tracking-wide">
                New Customers
              </p>
              <Users className="w-4 h-4 text-[#7b53eb]" />
            </div>
            <p className="text-[32px] font-semibold tracking-tight mb-2">
              156
            </p>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-green-600" />
              <span className="text-xs font-medium text-green-700">
                +15.03%
              </span>
              <span className="text-xs text-slate-500">
                vs last period
              </span>
            </div>
            <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] rounded-full"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Objectives Section */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[18px] font-semibold">
            Marketing Objectives
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-[12px] p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#7b53eb]" />
              <p className="text-[13px] font-semibold text-slate-800">
                Primary Goal
              </p>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Increase brand awareness among eco-conscious
              millennials through authentic storytelling
            </p>
          </div>

          <div className="bg-slate-50 rounded-[12px] p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#459aff]" />
              <p className="text-[13px] font-semibold text-slate-800">
                Target Conversion
              </p>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Drive 20% increase in e-commerce sales through
              Instagram and lifestyle platforms
            </p>
          </div>
        </div>
      </div>

      {/* Audience Insights Section */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Users className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[18px] font-semibold">
            Audience Insights
          </h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-[10px] border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] mb-1.5 text-slate-800">
                Primary Demographic
              </p>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Females aged 25–34, with a strong preference for
                emotionally resonant content
              </p>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-[#7b53eb]/10 text-[#7b53eb] text-[11px]">
                  25-34 years
                </Badge>
                <Badge className="bg-[#7b53eb]/10 text-[#7b53eb] text-[11px]">
                  Female
                </Badge>
                <Badge className="bg-[#7b53eb]/10 text-[#7b53eb] text-[11px]">
                  Emotional
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-[10px] border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#459aff] to-[#3a8ae6] flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] mb-1.5 text-slate-800">
                Shopping Behavior
              </p>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Frequently shop via Instagram and Redbook,
                primarily on iOS devices
              </p>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-[#459aff]/10 text-[#459aff] text-[11px]">
                  Instagram
                </Badge>
                <Badge className="bg-[#459aff]/10 text-[#459aff] text-[11px]">
                  iOS
                </Badge>
                <Badge className="bg-[#459aff]/10 text-[#459aff] text-[11px]">
                  Social Commerce
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-[10px] border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
              <Palette className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] mb-1.5 text-slate-800">
                Product Interests
              </p>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Show recurring interest in eco-friendly,
                aesthetic, and minimalist products
              </p>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-green-100 text-green-700 text-[11px]">
                  Eco-Friendly
                </Badge>
                <Badge className="bg-green-100 text-green-700 text-[11px]">
                  Minimalist
                </Badge>
                <Badge className="bg-green-100 text-green-700 text-[11px]">
                  Aesthetic
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-[10px] border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ffa500] to-[#ff8c00] flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] mb-1.5 text-slate-800">
                Professional Background
              </p>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Work in creative industries such as design,
                lifestyle blogging, or boutique retail
              </p>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-orange-100 text-orange-700 text-[11px]">
                  Creative
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 text-[11px]">
                  Design
                </Badge>
                <Badge className="bg-orange-100 text-orange-700 text-[11px]">
                  Retail
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StageBrandAnalysis() {
  const brandColors = [
    "#e8dcc8",
    "#a8c5a3",
    "#f4f1ed",
    "#d4b59e",
  ];

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[32px] tracking-tight mb-1">
            Brand Analysis
          </h2>
          <p className="text-sm text-slate-500">
            AI-detected brand personality and style guidelines
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="shadow-sm"
          >
            Edit Brand Info
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] hover:from-[#6a42da] hover:to-[#8a62ea] shadow-md"
          >
            Apply Style →
          </Button>
        </div>
      </div>

      {/* Brand Color Palette */}
      <div className="bg-white rounded-[20px] p-6 border border-slate-200 shadow-md">
        <h3 className="text-[16px] font-semibold mb-4">
          Brand Color Palette
        </h3>
        <div className="flex gap-4">
          {brandColors.map((color, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 rounded-[14px] border-2 border-slate-200 shadow-sm hover:scale-105 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs font-mono text-slate-600">
                    {color}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Primary Color {idx + 1}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Brand Guidelines */}
      <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <Palette className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[20px] font-semibold">
            Brand Guidelines
          </h3>
        </div>

        <div className="space-y-5">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex gap-5"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] text-white rounded-[16px] p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5" />
                <p className="font-semibold text-[18px]">
                  Tone of Voice
                </p>
              </div>
              <p className="text-[15px] mb-2">
                "Tone: calm, authentic, elegant."
              </p>
              <p className="text-[14px] opacity-95">
                "Creates trust and emotional comfort for
                lifestyle audiences."
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex gap-5"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] text-white rounded-[16px] p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="w-5 h-5" />
                <p className="font-semibold text-[18px]">
                  Visual Style
                </p>
              </div>
              <p className="text-[15px] mb-2">
                "Color palette: pastel beige, sage green."
              </p>
              <p className="text-[14px] opacity-95">
                "Visual direction: cozy minimalism with soft
                natural lighting."
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex gap-5"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#7b53eb] to-[#9b73fb] text-white rounded-[16px] p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Type className="w-5 h-5" />
                <p className="font-semibold text-[18px]">
                  Language Blueprint
                </p>
              </div>
              <p className="text-[15px] mb-2">
                "Use simple emotional language."
              </p>
              <p className="text-[14px] opacity-95">
                "Template: [Product] helps you [achieve feeling]
                naturally."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface StageTextGenerationProps {
  content: string;
  onRegenerate: () => void;
}

function StageTextGeneration({
  content,
  onRegenerate,
}: StageTextGenerationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  useEffect(() => {
    setEditedContent(content);
  }, [content]);

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[32px] tracking-tight mb-1">
            Copywriting Generation
          </h2>
          <p className="text-sm text-slate-500">
            AI-crafted marketing copy aligned with your brand
            voice
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="shadow-sm"
          >
            {isEditing ? "Save Changes" : "Edit Text"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onRegenerate}
            className="shadow-sm"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Regenerate
          </Button>
        </div>
      </div>

      {/* Generated Copy Card */}
      <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-[#7b53eb]" />
            <h3 className="text-[20px] font-semibold">
              Generated Marketing Copy
            </h3>
          </div>
          <Badge className="bg-green-100 text-green-700">
            Ready to use
          </Badge>
        </div>

        {isEditing ? (
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full min-h-[120px] p-5 border-2 border-slate-200 rounded-[14px] text-[16px] leading-relaxed focus:ring-2 focus:ring-[#7b53eb] focus:border-transparent transition-all shadow-sm"
          />
        ) : (
          <div className="bg-slate-50 rounded-[14px] p-6">
            <p className="text-[17px] leading-relaxed text-slate-800">
              {editedContent}
            </p>
          </div>
        )}

        <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between text-sm text-slate-600">
          <div className="flex items-center gap-4">
            <span>
              Words:{" "}
              <strong>{editedContent.split(" ").length}</strong>
            </span>
            <span>
              Characters:{" "}
              <strong>{editedContent.length}</strong>
            </span>
          </div>
          <span>
            Tone:{" "}
            <strong className="text-[#7b53eb]">
              Calm & Authentic
            </strong>
          </span>
        </div>
      </div>

      {/* Typography Specifications */}
      <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <Type className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[20px] font-semibold">
            Typography Specifications
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-5 bg-slate-50 rounded-[14px] hover:bg-slate-100 transition-colors">
            <p className="text-[13px] text-slate-500 mb-2 font-medium">
              Headline Font
            </p>
            <p className="text-[20px] font-semibold mb-1">
              Inter Bold
            </p>
            <p className="text-xs text-slate-400">
              For titles and headings
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-[14px] hover:bg-slate-100 transition-colors">
            <p className="text-[13px] text-slate-500 mb-2 font-medium">
              Body Font
            </p>
            <p className="text-[20px]">Inter Regular</p>
            <p className="text-xs text-slate-400">
              For body content
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-[14px] hover:bg-slate-100 transition-colors">
            <p className="text-[13px] text-slate-500 mb-2 font-medium">
              Headline Size
            </p>
            <p className="text-[20px] font-semibold">32px</p>
            <p className="text-xs text-slate-400">
              2rem / Desktop
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-[14px] hover:bg-slate-100 transition-colors">
            <p className="text-[13px] text-slate-500 mb-2 font-medium">
              Body Size
            </p>
            <p className="text-[20px]">16px</p>
            <p className="text-xs text-slate-400">
              1rem / Desktop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StageImageGenerationProps {
  images: string[];
  onRegenerateImage: (index: number) => void;
}

function StageImageGeneration({
  images,
  onRegenerateImage,
}: StageImageGenerationProps) {
  const [selectedImage, setSelectedImage] = useState<
    number | null
  >(null);
  const colorPalette = [
    "#e8dcc8",
    "#a8c5a3",
    "#ffffff",
    "#f4f1ed",
    "#d4b59e",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[32px] tracking-tight mb-1">
            Image Generation
          </h2>
          <p className="text-sm text-slate-500">
            AI-generated visuals matching your brand aesthetics
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="shadow-sm"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Regenerate All
        </Button>
      </div>

      {/* Image Grid - 2 columns with consistent spacing */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="relative aspect-square rounded-[14px] overflow-hidden cursor-pointer bg-slate-100 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <img
                src={src}
                alt={`Generated ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(idx)}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image Info */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge className="bg-white/90 text-slate-800 shadow-md">
                  Image {idx + 1}
                </Badge>
              </div>
            </div>

            {/* Download and Regenerate Buttons Below Image */}
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 h-9 text-xs shadow-sm hover:shadow-md transition-shadow"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Download
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onRegenerateImage(idx)}
                className="flex-1 h-9 text-xs shadow-sm hover:shadow-md transition-shadow"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                Regenerate
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Color Palette and Tone Summary Card - Horizontal Layout */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Palette className="w-5 h-5 text-[#7b53eb]" />
          <h3 className="text-[18px] font-semibold">
            Color Palette & Visual Tone
          </h3>
        </div>

        <div className="flex items-center gap-6">
          {/* Color Swatches */}
          <div className="flex gap-3">
            {colorPalette.map((color, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-16 h-16 rounded-[12px] border-2 border-slate-200 hover:scale-110 transition-transform cursor-pointer shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-[10px] font-mono text-slate-600">
                      {color}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">{color}</p>
                  <p className="text-xs text-slate-400">
                    {idx === 0
                      ? "Primary"
                      : idx === 1
                        ? "Secondary"
                        : idx === 2
                          ? "Accent"
                          : idx === 3
                            ? "Neutral"
                            : "Background"}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Tone Summary */}
          <div className="flex-1 pl-6 border-l border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7b53eb]" />
                <p className="text-[13px] text-slate-600">
                  <span className="font-semibold text-slate-800">
                    Style:
                  </span>{" "}
                  Cozy minimalism with soft natural lighting
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#459aff]" />
                <p className="text-[13px] text-slate-600">
                  <span className="font-semibold text-slate-800">
                    Mood:
                  </span>{" "}
                  Calm, authentic, eco-conscious
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-[13px] text-slate-600">
                  <span className="font-semibold text-slate-800">
                    Target:
                  </span>{" "}
                  Lifestyle-focused millennials, ages 25-34
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage]}
                alt="Preview"
                className="w-full h-full object-contain rounded-[16px] shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface StageFinalOutputProps {
  onPublish: () => void;
}

function StageFinalOutput({
  onPublish,
}: StageFinalOutputProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[32px] tracking-tight mb-1">
            Final Output
          </h2>
          <p className="text-sm text-slate-500">
            Complete marketing campaign ready for deployment
          </p>
        </div>
      </div>

      {/* Large Poster-Style Preview - Centered */}
      <div className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-lg">
        {/* Main Campaign Poster */}
        <div className="relative bg-gradient-to-br from-[#e8dcc8] via-[#f4f1ed] to-[#e8dcc8] rounded-[14px] overflow-hidden shadow-md border border-slate-100 mx-auto max-w-[600px]">
          {/* Image Section */}
          <div className="relative aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1721111260419-03565e518110?w=800&h=1000&fit=crop"
              alt="Final campaign output"
              className="w-full h-full object-cover"
            />

            {/* Text Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="space-y-4">
                <h3 className="text-white text-[32px] font-semibold leading-tight">
                  Eco-Friendly Tote Collection
                </h3>
                <p className="text-white/95 text-[16px] leading-relaxed max-w-[500px]">
                  Carry your values with style. Our eco-friendly
                  tote bags combine conscious design with
                  everyday elegance. Crafted from sustainable
                  materials, each bag tells a story of mindful
                  living.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    Shop Now
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    #EcoFriendly
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    #Sustainable
                  </Badge>
                </div>
              </div>
            </div>

            {/* Final Version Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-[#ffa500] to-[#ff8c00] text-white shadow-lg">
                Final Version
              </Badge>
            </div>
          </div>
        </div>

        {/* Campaign Meta Info */}
        <div className="mt-6 flex items-center justify-between px-2">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              Instagram Post Format
            </span>
            <span>•</span>
            <span>1080 × 1350 px</span>
            <span>•</span>
            <span className="text-green-600 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              Ready to Publish
            </span>
          </div>

          <div className="flex gap-2">
            <Badge className="bg-[#7b53eb]/10 text-[#7b53eb]">
              4 Assets
            </Badge>
            <Badge className="bg-green-100 text-green-700">
              100% Match
            </Badge>
          </div>
        </div>
      </div>

      {/* Clear CTA Buttons - Balanced Layout */}
      <div className="grid grid-cols-3 gap-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#ffa500] to-[#ff8c00] hover:from-[#e69500] hover:to-[#e67e00] text-white h-12 shadow-md hover:shadow-lg transition-all"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="h-12 shadow-sm hover:shadow-md transition-shadow"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Regenerate
        </Button>

        <Button
          size="lg"
          onClick={onPublish}
          className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] hover:from-[#6a42da] hover:to-[#8a62ea] h-12 shadow-md hover:shadow-lg transition-all"
        >
          Publish to Platform
        </Button>
      </div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-[14px] p-5 shadow-sm"
      >
        <div className="flex gap-4">
          <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-green-900 mb-1.5 text-[17px]">
              Campaign Approved!
            </h4>
            <p className="text-[14px] text-green-700 leading-relaxed">
              Your marketing materials are ready for deployment.
              All assets have been optimized and saved to your
              project folder.
            </p>
            <div className="flex gap-2 mt-3">
              <Badge className="bg-green-600 text-white text-[11px]">
                4 Assets Ready
              </Badge>
              <Badge className="bg-white text-green-700 border border-green-300 text-[11px]">
                Brand Aligned
              </Badge>
              <Badge className="bg-white text-green-700 border border-green-300 text-[11px]">
                SEO Optimized
              </Badge>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Analytics Dashboard Component
function AnalyticsDashboard() {
  // Mock data for analytics
  const stats = [
    {
      title: "Total Views",
      value: "47,392",
      change: "+12.5%",
      icon: Eye,
      color: "from-[#7b53eb] to-[#9b73fb]",
    },
    {
      title: "Engagement Rate",
      value: "8.4%",
      change: "+2.3%",
      icon: TrendingUp,
      color: "from-[#459aff] to-[#3a8ae6]",
    },
    {
      title: "Click-Through Rate",
      value: "3.2%",
      change: "+0.8%",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Conversions",
      value: "1,284",
      change: "+18.2%",
      icon: CheckCircle2,
      color: "from-[#ffa500] to-[#ff8c00]",
    },
  ];

  const chartData = [
    { date: "Jan 15", views: 2400, engagement: 180, conversions: 82 },
    { date: "Jan 20", views: 3200, engagement: 245, conversions: 105 },
    { date: "Jan 25", views: 2800, engagement: 210, conversions: 91 },
    { date: "Feb 1", views: 3900, engagement: 320, conversions: 134 },
    { date: "Feb 5", views: 4200, engagement: 365, conversions: 148 },
    { date: "Feb 10", views: 3800, engagement: 295, conversions: 127 },
    { date: "Feb 15", views: 4500, engagement: 410, conversions: 162 },
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-[32px] tracking-tight mb-2">
          Post Performance Overview
        </h1>
        <p className="text-slate-600">
          Monitor your published content performance across all platforms
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-[16px] p-6 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)] transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-[12px] bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-green-100 text-green-700 border-0">
                {stat.change}
              </Badge>
            </div>
            <div>
              <p className="text-slate-600 text-[13px] mb-1">{stat.title}</p>
              <p className="text-[28px] font-semibold tracking-tight">
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-[16px] p-8 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] border border-slate-100"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[20px] font-semibold mb-1">
              Performance Trends
            </h2>
            <p className="text-sm text-slate-600">
              Last 30 days performance metrics
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#7b53eb]" />
              <span className="text-sm text-slate-600">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#459aff]" />
              <span className="text-sm text-slate-600">Engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-slate-600">Conversions</span>
            </div>
          </div>
        </div>

        {/* Simple Bar Chart Visualization */}
        <div className="space-y-4">
          {chartData.map((data, index) => (
            <div key={data.date} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 w-20">{data.date}</span>
                <div className="flex-1 flex gap-2 items-center ml-4">
                  {/* Views Bar */}
                  <div className="flex-1 bg-slate-100 rounded-full h-8 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(data.views / 5000) * 100}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="bg-gradient-to-r from-[#7b53eb] to-[#9b73fb] h-full flex items-center justify-end pr-3"
                    >
                      <span className="text-white text-xs font-medium">
                        {data.views}
                      </span>
                    </motion.div>
                  </div>
                  {/* Engagement Bar */}
                  <div className="flex-1 bg-slate-100 rounded-full h-8 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(data.engagement / 500) * 100}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="bg-gradient-to-r from-[#459aff] to-[#3a8ae6] h-full flex items-center justify-end pr-3"
                    >
                      <span className="text-white text-xs font-medium">
                        {data.engagement}
                      </span>
                    </motion.div>
                  </div>
                  {/* Conversions Bar */}
                  <div className="flex-1 bg-slate-100 rounded-full h-8 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(data.conversions / 200) * 100}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-full flex items-center justify-end pr-3"
                    >
                      <span className="text-white text-xs font-medium">
                        {data.conversions}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Posts Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-[16px] p-8 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] border border-slate-100"
      >
        <h2 className="text-[20px] font-semibold mb-6">
          Recent Posts Performance
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Eco-Friendly Tote Bags Campaign",
              platform: "Instagram",
              date: "Feb 15, 2025",
              views: "12.4K",
              engagement: "8.2%",
              conversions: "342",
            },
            {
              title: "Spring Collection Launch",
              platform: "Facebook",
              date: "Feb 10, 2025",
              views: "8.9K",
              engagement: "6.8%",
              conversions: "218",
            },
            {
              title: "Sustainable Living Tips",
              platform: "Twitter",
              date: "Feb 5, 2025",
              views: "15.2K",
              engagement: "9.1%",
              conversions: "427",
            },
          ].map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-[12px] border border-slate-200 hover:border-[#7b53eb] hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-[15px] mb-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Link className="w-3.5 h-3.5" />
                    {post.platform}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <div className="text-center">
                  <p className="text-[13px] text-slate-600 mb-1">Views</p>
                  <p className="font-semibold">{post.views}</p>
                </div>
                <div className="text-center">
                  <p className="text-[13px] text-slate-600 mb-1">Engagement</p>
                  <p className="font-semibold text-[#459aff]">
                    {post.engagement}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[13px] text-slate-600 mb-1">Conversions</p>
                  <p className="font-semibold text-green-600">
                    {post.conversions}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}