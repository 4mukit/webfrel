import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration" // Updated import
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents" // Updated import

const BentoCard = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-xl md:rounded-2xl border border-white/20 flex flex-col justify-start items-start relative group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-xl md:rounded-2xl transition-all duration-500 group-hover:bg-primary/5"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl md:rounded-2xl group-hover:from-primary/10 transition-all duration-500" />

    <div className="self-stretch p-4 md:p-6 flex flex-col justify-start items-start gap-2 relative z-10 transition-all duration-300 group-hover:translate-y-[-2px]">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-base md:text-lg font-normal leading-6 md:leading-7 group-hover:text-primary transition-colors duration-300">
          {title} <br />
          <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-sm md:text-base">
            {description}
          </span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-60 md:h-72 relative -mt-0.5 z-10 transition-all duration-300 group-hover:scale-105">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "AI-powered code reviews.",
      description: "Get real-time, smart suggestions for cleaner code.",
      Component: AiCodeReviews,
    },
    {
      title: "Real-time coding previews",
      description: "Chat, collaborate, and instantly preview changes together.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "One-click integrations",
      description: "Easily connect your workflow with popular dev tools.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "Flexible MCP connectivity",
      description: "Effortlessly manage and configure MCP server access.",
      Component: MCPConnectivityIllustration, // Updated component
    },
    {
      title: "Launch parallel coding agents", // Swapped position
      description: "Solve complex problems faster with multiple AI agents.",
      Component: ParallelCodingAgents, // Updated component
    },
    {
      title: "Deployment made easy", // Swapped position
      description: "Go from code to live deployment on Vercel instantly.",
      Component: EasyDeployment,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="block w-[200px] sm:w-[447px] md:w-[547px] h-[300px] sm:h-[700px] md:h-[938px] absolute top-[420px] sm:top-[560px] md:top-[614px] left-[16px] sm:left-[40px] md:left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] sm:blur-[120px] md:blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Empower Your Workflow with AI
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to
              streamline your operations.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
