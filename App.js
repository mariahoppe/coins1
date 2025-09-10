import { useState, useEffect } from 'react'
import {
  Coins, 
  BookOpen, 
  Trophy, 
  Users, 
  Target, 
  Star, 
  ArrowRight, 
  CheckCircle,
  GraduationCap,
  Zap,
  Award,
  TrendingUp,
  Menu,
  X
} from 'lucide-react';

// Replicating components with Tailwind classes and inline JSX/TSX
const Button = ({ children, className = '', size = 'md', variant = 'default', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const sizeClasses = {
    sm: 'h-8 px-3',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8'
  };
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
  };
  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`font-semibold tracking-tight text-xl ${className}`} {...props}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Badge = ({ children, className = '', ...props }) => {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Coins className="w-8 h-8 text-yellow-500" />,
      title: "Sistema de Moedas",
      description: "Ganhe moedas virtuais ao completar atividades e exercícios de revisão."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "Atividades Interativas",
      description: "Pratique com questões organizadas por disciplina e nível de dificuldade."
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      title: "Troca por Benefícios",
      description: "Converta suas moedas em pontos extras, benefícios acadêmicos e recompensas."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Acompanhamento de Progresso",
      description: "Visualize seu desempenho, frequência e evolução em tempo real."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Estude e Pratique",
      description: "Acesse atividades de revisão organizadas por disciplina e complete os exercícios."
    },
    {
      number: "02",
      title: "Ganhe Moedas",
      description: "Receba moedas virtuais como recompensa por cada atividade completada com sucesso."
    },
    {
      number: "03",
      title: "Troque por Benefícios",
      description: "Use suas moedas para obter pontos extras, benefícios acadêmicos e outras recompensas."
    }
  ];

  const personas = [
    {
      name: "Ana Paula",
      age: "16 anos",
      type: "Estudante Engajada",
      quote: "Adoro quando posso ver meu progresso e ser recompensada por isso! Me sinto mais motivada a estudar.",
      goals: ["Melhorar notas em disciplinas difíceis", "Revisar conteúdos para vestibulares", "Manter-se motivada nos estudos"],
      color: "bg-blue-500"
    },
    {
      name: "João Pedro",
      age: "15 anos",
      type: "Estudante Desmotivado",
      quote: "Estudar é chato, mas se tiver um jogo ou alguma recompensa, talvez eu preste mais atenção.",
      goals: ["Passar de ano sem dificuldades", "Encontrar forma interessante de estudar", "Superar a procrastinação"],
      color: "bg-green-500"
    }
  ];

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @custom-variant dark (&:is(.dark *));

        @theme inline {
          --radius-sm: calc(var(--radius) - 4px);
          --radius-md: calc(var(--radius) - 2px);
          --radius-lg: var(--radius);
          --radius-xl: calc(var(--radius) + 4px);
          --color-background: var(--background);
          --color-foreground: var(--foreground);
          --color-card: var(--card);
          --color-card-foreground: var(--card-foreground);
          --color-popover: var(--popover);
          --color-popover-foreground: var(--popover-foreground);
          --color-primary: var(--primary);
          --color-primary-foreground: var(--primary-foreground);
          --color-secondary: var(--secondary);
          --color-secondary-foreground: var(--secondary-foreground);
          --color-muted: var(--muted);
          --color-muted-foreground: var(--muted-foreground);
          --color-accent: var(--accent);
          --color-accent-foreground: var(--accent-foreground);
          --color-destructive: var(--destructive);
          --color-border: var(--border);
          --color-input: var(--input);
          --color-ring: var(--ring);
          --color-chart-1: var(--chart-1);
          --color-chart-2: var(--chart-2);
          --color-chart-3: var(--chart-3);
          --color-chart-4: var(--chart-4);
          --color-chart-5: var(--chart-5);
          --color-sidebar: var(--sidebar);
          --color-sidebar-foreground: var(--sidebar-foreground);
          --color-sidebar-primary: var(--sidebar-primary);
          --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
          --color-sidebar-accent: var(--sidebar-accent);
          --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
          --color-sidebar-border: var(--sidebar-border);
          --color-sidebar-ring: var(--sidebar-ring);
        }

        :root {
          --radius: 0.625rem;
          --background: oklch(1 0 0);
          --foreground: oklch(0.145 0 0);
          --card: oklch(1 0 0);
          --card-foreground: oklch(0.145 0 0);
          --popover: oklch(1 0 0);
          --popover-foreground: oklch(0.145 0 0);
          --primary: oklch(0.205 0 0);
          --primary-foreground: oklch(0.985 0 0);
          --secondary: oklch(0.97 0 0);
          --secondary-foreground: oklch(0.205 0 0);
          --muted: oklch(0.97 0 0);
          --muted-foreground: oklch(0.556 0 0);
          --accent: oklch(0.97 0 0);
          --accent-foreground: oklch(0.205 0 0);
          --destructive: oklch(0.577 0.245 27.325);
          --border: oklch(0.922 0 0);
          --input: oklch(0.922 0 0);
          --ring: oklch(0.708 0 0);
          --chart-1: oklch(0.646 0.222 41.116);
          --chart-2: oklch(0.6 0.118 184.704);
          --chart-3: oklch(0.398 0.07 227.392);
          --chart-4: oklch(0.828 0.189 84.429);
          --chart-5: oklch(0.769 0.188 70.08);
          --sidebar: oklch(0.985 0 0);
          --sidebar-foreground: oklch(0.145 0 0);
          --sidebar-primary: oklch(0.205 0 0);
          --sidebar-primary-foreground: oklch(0.985 0 0);
          --sidebar-accent: oklch(0.97 0 0);
          --sidebar-accent-foreground: oklch(0.205 0 0);
          --sidebar-border: oklch(0.922 0 0);
          --sidebar-ring: oklch(0.708 0 0);
        }
        
        .dark {
          --background: oklch(0.145 0 0);
          --foreground: oklch(0.985 0 0);
          --card: oklch(0.205 0 0);
          --card-foreground: oklch(0.985 0 0);
          --popover: oklch(0.205 0 0);
          --popover-foreground: oklch(0.985 0 0);
          --primary: oklch(0.922 0 0);
          --primary-foreground: oklch(0.205 0 0);
          --secondary: oklch(0.269 0 0);
          --secondary-foreground: oklch(0.985 0 0);
          --muted: oklch(0.269 0 0);
          --muted-foreground: oklch(0.708 0 0);
          --accent: oklch(0.269 0 0);
          --accent-foreground: oklch(0.985 0 0);
          --destructive: oklch(0.704 0.191 22.216);
          --border: oklch(1 0 0 / 10%);
          --input: oklch(1 0 0 / 15%);
          --ring: oklch(0.556 0 0);
          --chart-1: oklch(0.488 0.243 264.376);
          --chart-2: oklch(0.696 0.17 162.48);
          --chart-3: oklch(0.769 0.188 70.08);
          --chart-4: oklch(0.627 0.265 303.9);
          --chart-5: oklch(0.645 0.246 16.439);
          --sidebar: oklch(0.205 0 0);
          --sidebar-foreground: oklch(0.985 0 0);
          --sidebar-primary: oklch(0.488 0.243 264.376);
          --sidebar-primary-foreground: oklch(0.985 0 0);
          --sidebar-accent: oklch(0.269 0 0);
          --sidebar-accent-foreground: oklch(0.985 0 0);
          --sidebar-border: oklch(1 0 0 / 10%);
          --sidebar-ring: oklch(0.556 0 0);
        }
        
        @layer base {
          * {
            @apply border-border outline-ring/50;
          }
          body {
            @apply bg-background text-foreground;
          }
        }
        `}
      </style>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800">Coins for Study</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
                <a href="#funcionalidades" className="text-gray-700 hover:text-blue-600 transition-colors">Funcionalidades</a>
                <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
                <a href="#personas" className="text-gray-700 hover:text-blue-600 transition-colors">Personas</a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Começar Agora
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4 pt-4">
                  <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
                  <a href="#funcionalidades" className="text-gray-700 hover:text-blue-600 transition-colors">Funcionalidades</a>
                  <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
                  <a href="#personas" className="text-gray-700 hover:text-blue-600 transition-colors">Personas</a>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
                    Começar Agora
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🎓 Plataforma Educacional Gamificada
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Transforme o Estudo em uma
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Aventura Recompensadora</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                O Coins for Study é uma plataforma educacional que motiva estudantes através de um sistema gamificado, 
                onde cada atividade completada gera moedas que podem ser trocadas por benefícios acadêmicos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Saiba Mais
                </Button>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
                  <div className="text-gray-600">Estudantes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50k+</div>
                  <div className="text-gray-600">Atividades Completadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Melhoria no Desempenho</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-red-100 text-red-800">❌ O Problema</Badge>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  A Desmotivação dos Estudantes é Real
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p>Dificuldade em relembrar assuntos de períodos anteriores</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p>Falta de motivação para estudar e revisar conteúdos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p>Métodos de estudo monótonos e pouco engajantes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p>Baixo desempenho em provas por falta de revisão</p>
                  </div>
                </div>
              </div>
              
              <div>
                <Badge className="mb-4 bg-green-100 text-green-800">✅ Nossa Solução</Badge>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Gamificação que Realmente Funciona
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p>Sistema de recompensas que motiva o estudo contínuo</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p>Atividades organizadas por disciplina e dificuldade</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p>Acompanhamento visual do progresso e desempenho</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p>Troca de moedas por benefícios acadêmicos reais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">🚀 Processo Simples</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Como Funciona em 3 Passos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Um processo simples e intuitivo que transforma o estudo em uma experiência recompensadora
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="funcionalidades" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-800">⚡ Funcionalidades</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Recursos que Fazem a Diferença
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubra as funcionalidades que tornam o Coins for Study a melhor plataforma para motivar seus estudos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sistema de Conquistas</h3>
                    <p className="text-gray-600">Desbloqueie conquistas especiais ao atingir marcos importantes em seus estudos.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gestão de Turmas</h3>
                    <p className="text-gray-600">Professores podem gerenciar turmas, adicionar atividades e acompanhar o progresso dos alunos.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Personas Section */}
        <section id="personas" className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-800">👥 Personas</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Para Todos os Tipos de Estudantes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Desenvolvido pensando nas diferentes necessidades e perfis de estudantes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {personas.map((persona, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className={`h-2 ${persona.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${persona.color} rounded-full flex items-center justify-center`}>
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{persona.name}</CardTitle>
                        <CardDescription className="text-lg">{persona.age} • {persona.type}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-gray-700 italic mb-6 text-lg">
                      "{persona.quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Objetivos:</h4>
                      <ul className="space-y-2">
                        {persona.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start space-x-2">
                            <Target className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Transformar seus Estudos?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Junte-se a milhares de estudantes que já descobriram uma forma mais divertida e eficaz de estudar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  <Zap className="w-5 h-5 mr-2" />
                  Começar Gratuitamente
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ver Demonstração
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">Coins for Study</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Transformando o estudo em uma aventura recompensadora através da gamificação educacional.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Produto</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Suporte</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Coins for Study. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
