/**
 * Technology Stack Page — Qubit Calculus
 *
 * Showcases the technologies, tools, and platforms we use,
 * organized by category with visual hierarchy.
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MarketingLayout } from '@/components/marketing';
import { SectionHeader } from '@/components/marketing/ui/SectionHeader';
import { REVEAL_UP } from '@/lib/motion-presets';
import SEO, { breadcrumbJsonLd } from '@/components/SEO';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface TechCategory {
  title: string;
  subtitle: string;
  gradient: string;
  glowColor: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    subtitle: 'What users see and interact with',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    items: [
      { name: 'React', icon: <ReactIcon />, description: 'Component-driven UIs with React 19' },
      { name: 'Next.js', icon: <NextIcon />, description: 'Full-stack React framework' },
      { name: 'TypeScript', icon: <TypeScriptIcon />, description: 'Type-safe code, fewer bugs' },
      { name: 'Tailwind CSS', icon: <TailwindIcon />, description: 'Utility-first styling' },
      { name: 'Framer Motion', icon: <FramerIcon />, description: 'Production-ready animations' },
      { name: 'React Native', icon: <ReactIcon />, description: 'Cross-platform mobile apps' },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'The engine behind the product',
    gradient: 'from-indigo-500 to-violet-500',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    items: [
      { name: 'Node.js', icon: <NodeIcon />, description: 'High-performance JavaScript runtime' },
      { name: 'Python', icon: <PythonIcon />, description: 'AI/ML and data pipelines' },
      { name: 'PostgreSQL', icon: <PostgresIcon />, description: 'Relational database at scale' },
      { name: 'Redis', icon: <RedisIcon />, description: 'Caching and real-time pub/sub' },
      { name: 'GraphQL', icon: <GraphQLIcon />, description: 'Flexible API queries' },
      { name: 'Prisma', icon: <PrismaIcon />, description: 'Type-safe database ORM' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    subtitle: 'Where it all runs',
    gradient: 'from-orange-500 to-amber-500',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    items: [
      { name: 'AWS', icon: <AWSIcon />, description: 'Enterprise cloud infrastructure' },
      { name: 'Vercel', icon: <VercelIcon />, description: 'Edge deployment platform' },
      { name: 'Docker', icon: <DockerIcon />, description: 'Containerized environments' },
      { name: 'GitHub Actions', icon: <GitHubIcon />, description: 'Automated CI/CD pipelines' },
      { name: 'Terraform', icon: <TerraformIcon />, description: 'Infrastructure as code' },
      { name: 'Cloudflare', icon: <CloudflareIcon />, description: 'CDN, DDoS protection, WAF' },
    ],
  },
  {
    title: 'AI & Data',
    subtitle: 'Intelligence layer',
    gradient: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    items: [
      { name: 'OpenAI', icon: <OpenAIIcon />, description: 'GPT-4, embeddings, assistants' },
      { name: 'LangChain', icon: <LangChainIcon />, description: 'LLM application framework' },
      { name: 'TensorFlow', icon: <TensorFlowIcon />, description: 'ML model training & inference' },
      { name: 'Pinecone', icon: <PineconeIcon />, description: 'Vector database for RAG' },
    ],
  },
  {
    title: 'Design & Collaboration',
    subtitle: 'How we work together',
    gradient: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.25)',
    items: [
      { name: 'Figma', icon: <FigmaIcon />, description: 'UI/UX design & prototyping' },
      { name: 'Linear', icon: <LinearIcon />, description: 'Issue tracking & project management' },
      { name: 'Notion', icon: <NotionIcon />, description: 'Documentation & knowledge base' },
      { name: 'Slack', icon: <SlackIcon />, description: 'Real-time team communication' },
    ],
  },
];

function TechCategorySection({ category, index }: { category: TechCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16 last:mb-0"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className={`h-px flex-1 bg-gradient-to-r ${category.gradient} opacity-20`}
        />
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{category.subtitle}</p>
        </div>
        <div
          className={`h-px flex-1 bg-gradient-to-l ${category.gradient} opacity-20`}
        />
      </div>

      {/* Tech Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {category.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.06 }}
            className="group relative flex flex-col items-center text-center p-4 rounded-2xl border border-gray-200/30 dark:border-white/[0.04] bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:bg-white/70 dark:hover:bg-white/[0.06] hover:border-gray-300/50 dark:hover:border-white/10 transition-all duration-300"
          >
            {/* Glow on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
              style={{ background: category.glowColor }}
            />

            <div className="w-10 h-10 flex items-center justify-center mb-3 text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {item.icon}
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{item.name}</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-500 leading-tight">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Stack() {
  return (
    <MarketingLayout
      title="Our Tech Stack"
      subtitle="The modern tools and technologies we use to build exceptional digital products."
    >
      <SEO
        title="Tech Stack"
        description="React, Next.js, TypeScript, Node.js, Python, PostgreSQL, AWS, Vercel — the modern tools powering our custom software. See our full technology stack."
        path="/stack"
        keywords="React, Next.js, TypeScript, Node.js, Python, PostgreSQL, AWS, Vercel, tech stack"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Tech Stack', path: '/stack' },
        ])}
      />
      {/* Stack Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...REVEAL_UP} className="text-center mb-20">
            <SectionHeader
              title="Engineered With"
              titleAccent="Modern Stacks"
              description="We're selective about our tools. Every technology in our stack is battle-tested, well-documented, and chosen for a reason."
              align="center"
            />
          </motion.div>

          {techCategories.map((category, index) => (
            <TechCategorySection key={category.title} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...REVEAL_UP} className="text-center mb-12">
            <SectionHeader
              title="Our Technology"
              titleAccent="Philosophy"
              description="We don't chase trends. We choose tools that deliver real value."
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Pragmatic over Trendy', description: 'We pick tech that solves your problem, not the latest framework of the week. Stability and community support matter more than novelty.' },
              { title: 'Type Safety Everywhere', description: 'TypeScript on the frontend, typed backends, schema validation at every boundary. Bugs caught at compile time never reach your users.' },
              { title: 'Performance by Default', description: 'Server-side rendering, edge caching, lazy loading, and optimized bundles. Every millisecond counts for user experience and SEO.' },
              { title: 'Security First', description: 'OWASP best practices, automated dependency scanning, encrypted data at rest and in transit. Security is not an afterthought.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-gray-200/30 dark:border-white/[0.04] bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}

/* ===== Inline SVG Icon Components ===== */

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" className="w-8 h-8" fill="currentColor">
      <circle r="2.05" /><g stroke="currentColor" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <rect width="128" height="128" rx="10" fill="#3178C6" />
      <path d="M56 72v-8H36v8h6.4v30H50V72h6zm18-8h-8.4l-.2 24c0 4.4-.4 6-3.2 6-2 0-3.6-1.6-5.2-4l-6.8 4c2.4 4.4 6 7.2 12.4 7.2 4 0 7.2-1.2 9.2-3.6 2.4-2.8 3.2-6.4 3.2-12.4V64h-1z" fill="white" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.28.28 0 0 0-.138.24v10.15c0 .099.053.19.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.307-1.33A1.85 1.85 0 0 1 1.36 17.07V6.921c0-.68.363-1.314.957-1.652L11.11.193a1.926 1.926 0 0 1 1.784 0l8.794 5.076c.593.339.957.973.957 1.652v10.15a1.85 1.85 0 0 1-.957 1.652l-8.794 5.076a1.89 1.89 0 0 1-.896.201z" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.35.12-.33.18-.32.25-.3.32-.27.39-.25.46-.22.52-.18.58-.14.64-.1.69-.06.74-.02h.01m-.45 8.27h-1.42l-.42.01-.39.04-.35.07-.3.11-.26.15-.22.18-.19.22-.15.25-.12.28-.09.3-.06.32-.04.33-.01.33v1.78l.08.56.16.47.24.37.32.28.39.2.46.13.52.07.57.02.57-.02.52-.07.46-.13.39-.2.32-.28.24-.37.16-.47.08-.56v-1.78l-.01-.33-.04-.33-.06-.32-.09-.3-.12-.28-.15-.25-.19-.22-.22-.18-.26-.15-.3-.11-.35-.07-.39-.04-.42-.01z" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.824 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.385.352l.048.03.087.04c.327.15.656.21.95.212.337 0 .624-.094.853-.208-.01.31-.015.616-.003.91.037.93.166 1.58.589 2.173.212.297.504.56.897.753a3.02 3.02 0 0 0 1.314.289c.635 0 1.24-.18 1.713-.558.264-.21.48-.48.642-.79a3.02 3.02 0 0 0 .326-1.4v-3.15a4.977 4.977 0 0 0 1.136-.06c.358-.074.7-.193 1.02-.39.32-.196.588-.449.826-.79.238-.34.394-.703.505-1.107l.027-.112c.07-.263.116-.47.165-.752.15-.854.227-1.49.204-2.193a5.527 5.527 0 0 0-.2-1.309l.6-1.27a8.108 8.108 0 0 0 .671-2.462c.064-.547.088-1.143-.043-1.726a2.973 2.973 0 0 0-.789-1.399 4.558 4.558 0 0 0-1.036-.765A7.37 7.37 0 0 0 17.128 0" />
    </svg>
  );
}

function RedisIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M10.5 2.661l.54.997-1.797.644 2.409.218.748 1.246.467-1.155 2.469-.132-1.836-.574.606-1.08-1.73.636zm-3.97 4.108c2.078 0 3.763.429 3.763.958s-1.685.958-3.762.958-3.763-.43-3.763-.958c0-.53 1.685-.958 3.763-.958m13.947 2.205c0 .265-.792.503-2.066.678-1.128.155-2.627.244-4.168.257l-1.146-.6c.472-.038.945-.082 1.39-.136 1.818-.22 2.992-.555 2.992-.877 0-.322-1.174-.657-2.992-.877a29.926 29.926 0 0 0-3.014-.164c-1.073 0-2.088.058-3.014.164-1.818.22-2.992.555-2.992.877 0 .118.176.234.49.344L4.403 10.03c-.852-.182-1.356-.39-1.356-.615 0-.53 2.954-.958 6.597-.958 3.642 0 6.832.43 6.832.958v.56zm0 2.477c0 .265-.792.503-2.066.678-1.128.155-2.627.244-4.168.257l-1.146-.6c.472-.038.945-.082 1.39-.136 1.818-.22 2.992-.555 2.992-.877 0-.322-1.174-.657-2.992-.877a29.926 29.926 0 0 0-3.014-.164c-1.073 0-2.088.058-3.014.164-1.818.22-2.992.555-2.992.877 0 .118.176.234.49.344l-1.564.567c-.852-.182-1.356-.39-1.356-.615 0-.53 2.954-.958 6.597-.958 3.642 0 6.832.43 6.832.958v.382zm0 2.476c0 .53-3.19.958-6.832.958-3.642 0-6.597-.43-6.597-.958 0-.53 2.955-.958 6.597-.958 3.642 0 6.832.43 6.832.958" />
    </svg>
  );
}

function GraphQLIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-2.26l-8.085 4.672a2.18 2.18 0 0 0-.076-.003v9.344l8.159 4.71 8.16-4.71V7.341a2.142 2.142 0 0 0-.076.003z" />
    </svg>
  );
}

function PrismaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L8.886 22.15a.193.193 0 0 1-.231-.093l-4.31-6.676c-.052-.08-.044-.18.019-.251l8.86-14.352a.193.193 0 0 1 .332.01l8.168 17.322a.193.193 0 0 1-.165.277z" />
    </svg>
  );
}

function AWSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.374 6.18 6.18 0 0 1-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.863.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.28-.144.616-.264 1.01-.36a4.84 4.84 0 0 1 1.246-.152c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.22a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415a3.484 3.484 0 0 1 1.005-.144c.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.694 0 .224.08.416.24.567.159.152.454.304.878.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.166 2.166 0 0 1-.574.694c-.247.2-.543.343-.886.44-.352.104-.735.152-1.15.152zM21.698 16.207c-2.626 1.94-6.442 2.97-9.722 2.97-4.598 0-8.74-1.7-11.87-4.526-.247-.224-.024-.527.272-.352 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.216.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function TerraformIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M1.44 0v7.575l6.56 3.79V3.79zm7.94 3.79v7.575l6.56 3.787V7.577zm6.56 4.86v7.575l6.56-3.787V4.862zM9.38 20.21l6.56 3.79V16.42l-6.56-3.79z" />
    </svg>
  );
}

function CloudflareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M16.509 16.516c.205-.675.154-1.29-.157-1.746-.287-.422-.774-.675-1.372-.712l-8.451-.108c-.063 0-.112-.018-.14-.054-.03-.036-.04-.082-.03-.14.016-.073.083-.126.157-.14l8.508-.112c1.148-.054 2.395-.96 2.82-2.049l.537-1.37c.023-.054.03-.108.017-.167C17.838 6.16 14.378 3.012 10.168 3.012 6.363 3.013 3.147 5.494 2.08 8.861c-.635-.49-1.44-.737-2.303-.64C-1.28 9.304-1.9 10.69.363 11.71l.016.012.004-.001c-.007.065-.013.13-.017.196-.27 3.04 2.165 5.643 5.202 5.643l10.505-.005c.065 0 .126-.023.158-.072.036-.05.05-.108.065-.16l.213-.807z" />
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

function LangChainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
}

function TensorFlowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-3.07 1.78V5.856zm21.416 0L12.46 0v24l4.095-2.378V14.1l3.07 1.78v-3.528l-3.07-1.78V7.603l3.07-1.78V2.295z" />
    </svg>
  );
}

function PineconeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-.098z" />
    </svg>
  );
}

function LinearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3.357 17.87l2.774 2.774A10.014 10.014 0 0 1 2.318 12c0-2.2.712-4.235 1.918-5.888l2.76 2.76A6.668 6.668 0 0 0 5.33 12c0 2.236 1.094 4.217 2.773 5.428L5.33 20.202A10.014 10.014 0 0 1 3.357 17.87zm3.541-14.513A10.014 10.014 0 0 1 12 2.318c2.2 0 4.235.712 5.888 1.918l-2.76 2.76A6.668 6.668 0 0 0 12 5.33c-2.236 0-4.217 1.094-5.428 2.773L3.798 5.33c.586-.703 1.24-1.345 1.944-1.918l1.156-.055zM12 21.682a10.014 10.014 0 0 1-5.888-1.918l2.76-2.76A6.668 6.668 0 0 0 12 18.67c2.236 0 4.217-1.094 5.428-2.773l2.773 2.773A10.014 10.014 0 0 1 12 21.682zm8.643-3.812A10.014 10.014 0 0 0 21.682 12c0-2.2-.712-4.235-1.918-5.888l-2.76 2.76A6.668 6.668 0 0 1 18.67 12c0 2.236-1.094 4.217-2.773 5.428l2.773 2.773c.655-.56 1.245-1.19 1.755-1.876l.218-.455z" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.934-.56.934-1.166V6.354c0-.606-.233-.933-.747-.886l-15.177.886c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.934-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.234 4.764 7.28v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.24 1.688l13.075-.933c1.588-.14 1.96-.046 2.94.653l4.063 2.848c.653.467.84.607.84 1.12v16.472c0 1.026-.374 1.635-1.681 1.728L6.693 24.47c-.98.047-1.448-.093-1.962-.747L1.54 19.936C.98 19.19.747 18.61.747 17.917V3.37c0-.934.374-1.587 1.493-1.682z" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}
