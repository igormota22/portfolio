import { Injectable, signal } from '@angular/core';

interface ProjetoIdioma {
    titulo: string;
    descricao: string;
}

interface SobreApresentacaoIdioma {
    inicio: string;
    destaque: string;
}

interface SobreConteudoIdioma {
    inicio: string;
    destaque: string;
    meio: string;
    destaque2: string;
    fim: string;
}

interface HabilidadeIdioma {
    titulo: string;
    descricao: string;
}

export interface HabilidadesIdioma {
    titulo: string;
    apresentacao: string;
    conteudo: string;
    cards: {
        dotnet: HabilidadeIdioma;
        csharp: HabilidadeIdioma;
        aspnet: HabilidadeIdioma;
        entityFramework: HabilidadeIdioma;
        apiRest: HabilidadeIdioma;
        mediatr: HabilidadeIdioma;
        jwt: HabilidadeIdioma;
        sql: HabilidadeIdioma;
        postgresql: HabilidadeIdioma;
        sqlServer: HabilidadeIdioma;
        rabbitmq: HabilidadeIdioma;
        docker: HabilidadeIdioma;
        testes: HabilidadeIdioma;
        identity: HabilidadeIdioma;
        angular: HabilidadeIdioma;
        typescript: HabilidadeIdioma;
        react: HabilidadeIdioma;
        javascript: HabilidadeIdioma;
        html: HabilidadeIdioma;
        css: HabilidadeIdioma;
        nodejs: HabilidadeIdioma;
        java: HabilidadeIdioma;
        git: HabilidadeIdioma;
        github: HabilidadeIdioma;
        vscode: HabilidadeIdioma;
    };
}

interface ProjetosIdioma {
    titulo: string;
    apresentacao: string;
    conteudo: string;
    demonstracao: string;
    repositorio: string;
    cards: {
        geradorCertificados: ProjetoIdioma;
        escolaCursos: ProjetoIdioma;
        controleMedicamentos: ProjetoIdioma;
    };
}

interface ContatoIdioma {
    titulo: string;
    apresentacao: string;
    email: string;
    linkedin: string;
    github: string;
    localizacao: string;
    disponibilidade: string;
}

type OpcoesIdioma = 'pt' | 'en' | 'es';

@Injectable({
    providedIn: 'root'
})
export class TraducaoService {

    idioma = signal<OpcoesIdioma>('pt');

    traducoes: {
        pt: {
            navbar: {
                sobre: string;
                projetos: string;
                habilidades: string;
                contato: string;
            };
            sobre: {
                titulo: string;
                apresentacao: SobreApresentacaoIdioma;
                conteudo: SobreConteudoIdioma;
            };
            projetos: ProjetosIdioma;
            habilidades: HabilidadesIdioma;
            contato: ContatoIdioma;

        };

        en: {
            navbar: {
                sobre: string;
                projetos: string;
                habilidades: string;
                contato: string;
            };
            sobre: {
                titulo: string;
                apresentacao: SobreApresentacaoIdioma;
                conteudo: SobreConteudoIdioma;
            };
            projetos: ProjetosIdioma;
            habilidades: HabilidadesIdioma;
            contato: ContatoIdioma;

        };

        es: {
            navbar: {
                sobre: string;
                projetos: string;
                habilidades: string;
                contato: string;
            };
            sobre: {
                titulo: string;
                apresentacao: SobreApresentacaoIdioma;
                conteudo: SobreConteudoIdioma;
            };
            projetos: ProjetosIdioma;
            habilidades: HabilidadesIdioma;
            contato: ContatoIdioma;

        };
    } = {

            // =====================================================
            // PORTUGUÊS
            // =====================================================

            pt: {

                navbar: {
                    sobre: 'Sobre',
                    projetos: 'Projetos',
                    habilidades: 'Habilidades',
                    contato: 'Contato'
                },

                sobre: {
                    titulo: 'Sobre mim',

                    apresentacao: {
                        inicio: 'Olá, eu sou',
                        destaque: 'Igor Mota De Mello'
                    },

                    conteudo: {
                        inicio: 'Sou Técnico em Informática e desenvolvedor de software em formação, atualmente direcionando minha carreira para o desenvolvimento de aplicações, com foco no desenvolvimento',

                        destaque: 'Full Stack',

                        meio: 'e muito interesse na área de dados. Tenho experiência de aprendizado e prática com',

                        destaque2: 'C# e .NET',

                        fim: ', além de tecnologias voltadas para APIs, bancos de dados, autenticação, mensageria, testes e desenvolvimento frontend.'
                    }
                },

                projetos: {
                    titulo: 'Projetos',

                    apresentacao: 'Projetos desenvolvidos durante minha formação',

                    conteudo: 'Aplicações que venho desenvolvendo para colocar em prática conceitos de programação, arquitetura, APIs, bancos de dados, frontend e boas práticas de desenvolvimento.',

                    demonstracao: 'Demonstração',

                    repositorio: 'Repositório',

                    cards: {

                        geradorCertificados: {
                            titulo: 'Gerador de Certificados',
                            descricao: 'API para geração e gerenciamento de certificados.'
                        },

                        escolaCursos: {
                            titulo: 'Escola de Cursos',
                            descricao: 'Aplicação para gerenciamento de cursos, alunos e informações relacionadas ao ambiente educacional.'
                        },

                        controleMedicamentos: {
                            titulo: 'Controle de Medicamentos',
                            descricao: 'Aplicação voltada ao controle e gerenciamento de medicamentos, desenvolvida para praticar conceitos de desenvolvimento de software.'
                        }
                    }
                },

                habilidades: {
                    titulo: 'Habilidades',

                    apresentacao: 'Tecnologias e ferramentas',

                    conteudo: 'Tecnologias e ferramentas que venho estudando e utilizando durante minha formação e desenvolvimento de projetos.',

                    cards: {

                        dotnet: {
                            titulo: '.NET',
                            descricao: 'Plataforma utilizada no desenvolvimento de aplicações.'
                        },

                        csharp: {
                            titulo: 'C#',
                            descricao: 'Linguagem principal utilizada no desenvolvimento backend.'
                        },

                        aspnet: {
                            titulo: 'ASP.NET Core',
                            descricao: 'Framework utilizado no desenvolvimento de aplicações web e APIs.'
                        },

                        entityFramework: {
                            titulo: 'Entity Framework Core',
                            descricao: 'ORM utilizado para trabalhar com bancos de dados.'
                        },

                        apiRest: {
                            titulo: 'APIs REST',
                            descricao: 'Desenvolvimento de APIs seguindo princípios REST.'
                        },

                        mediatr: {
                            titulo: 'MediatR',
                            descricao: 'Biblioteca utilizada para implementar o padrão Mediator.'
                        },

                        jwt: {
                            titulo: 'JWT',
                            descricao: 'Tecnologia utilizada para autenticação baseada em tokens.'
                        },

                        sql: {
                            titulo: 'SQL',
                            descricao: 'Linguagem utilizada para consulta e manipulação de dados.'
                        },

                        postgresql: {
                            titulo: 'PostgreSQL',
                            descricao: 'Banco de dados relacional utilizado em projetos.'
                        },

                        sqlServer: {
                            titulo: 'SQL Server',
                            descricao: 'Banco de dados relacional utilizado em estudos e projetos.'
                        },

                        rabbitmq: {
                            titulo: 'RabbitMQ',
                            descricao: 'Message broker utilizado para comunicação assíncrona entre aplicações.'
                        },

                        docker: {
                            titulo: 'Docker',
                            descricao: 'Plataforma utilizada para criação e execução de ambientes containerizados.'
                        },

                        testes: {
                            titulo: 'Testes Automatizados',
                            descricao: 'Prática utilizada para verificar o comportamento e a qualidade do software.'
                        },

                        identity: {
                            titulo: 'ASP.NET Core Identity',
                            descricao: 'Sistema utilizado para gerenciamento de usuários e autenticação.'
                        },

                        angular: {
                            titulo: 'Angular',
                            descricao: 'Framework utilizado no desenvolvimento de aplicações frontend.'
                        },

                        typescript: {
                            titulo: 'TypeScript',
                            descricao: 'Linguagem utilizada no desenvolvimento frontend com tipagem estática.'
                        },

                        react: {
                            titulo: 'React',
                            descricao: 'Biblioteca utilizada para desenvolvimento de interfaces frontend.'
                        },

                        javascript: {
                            titulo: 'JavaScript',
                            descricao: 'Linguagem utilizada no desenvolvimento web.'
                        },

                        html: {
                            titulo: 'HTML',
                            descricao: 'Linguagem utilizada para estruturar páginas web.'
                        },

                        css: {
                            titulo: 'CSS / SCSS',
                            descricao: 'Tecnologias utilizadas para estilização e criação de interfaces.'
                        },

                        nodejs: {
                            titulo: 'Node.js',
                            descricao: 'Runtime utilizado para execução de JavaScript no backend.'
                        },

                        java: {
                            titulo: 'Java',
                            descricao: 'Linguagem de programação estudada durante minha formação.'
                        },

                        git: {
                            titulo: 'Git',
                            descricao: 'Sistema de controle de versão utilizado no desenvolvimento.'
                        },

                        github: {
                            titulo: 'GitHub',
                            descricao: 'Plataforma utilizada para hospedagem e colaboração em projetos.'
                        },

                        vscode: {
                            titulo: 'Visual Studio Code',
                            descricao: 'Editor de código utilizado no desenvolvimento de aplicações e projetos.'
                        }
                    }
                },

                contato: {
                    titulo: 'Entre em contato',

                    apresentacao: 'Estou aberto a oportunidades, projetos e conexões profissionais.',

                    email: 'E-mail',

                    linkedin: 'LinkedIn',

                    github: 'GitHub',

                    localizacao: 'Lages - SC, Brasil',

                    disponibilidade: 'Disponível para novas oportunidades'
                }
            },


            // =====================================================
            // INGLÊS
            // =====================================================

            en: {

                navbar: {
                    sobre: 'About',
                    projetos: 'Projects',
                    habilidades: 'Skills',
                    contato: 'Contact'
                },

                sobre: {
                    titulo: 'About me',

                    apresentacao: {
                        inicio: 'Hello, I am',
                        destaque: 'Igor Mota De Mello'
                    },

                    conteudo: {
                        inicio: 'I am an IT Technician and software developer in training, currently directing my career towards application development, with a focus on',

                        destaque: 'Full Stack development',

                        meio: 'and a strong interest in data. I have learning and practical experience with',

                        destaque2: 'C# and .NET',

                        fim: ', as well as technologies related to APIs, databases, authentication, messaging, testing and frontend development.'
                    }
                },

                projetos: {
                    titulo: 'Projects',

                    apresentacao: 'Projects developed during my training',

                    conteudo: 'Applications I have been developing to put programming, architecture, APIs, databases, frontend and software development best practices into practice.',

                    demonstracao: 'Demo',

                    repositorio: 'Repository',

                    cards: {

                        geradorCertificados: {
                            titulo: 'Certificate Generator',
                            descricao: 'API for generating and managing certificates.'
                        },

                        escolaCursos: {
                            titulo: 'Course School',
                            descricao: 'Application for managing courses, students and information related to an educational environment.'
                        },

                        controleMedicamentos: {
                            titulo: 'Medication Management',
                            descricao: 'Application focused on managing and controlling medications, developed to practice software development concepts.'
                        }
                    }
                },

                habilidades: {
                    titulo: 'Skills',

                    apresentacao: 'Technologies and tools',

                    conteudo: 'Technologies and tools that I have been studying and using throughout my training and software development projects.',

                    cards: {

                        dotnet: {
                            titulo: '.NET',
                            descricao: 'Platform used for application development.'
                        },

                        csharp: {
                            titulo: 'C#',
                            descricao: 'Main language used for backend development.'
                        },

                        aspnet: {
                            titulo: 'ASP.NET Core',
                            descricao: 'Framework used for web application and API development.'
                        },

                        entityFramework: {
                            titulo: 'Entity Framework Core',
                            descricao: 'ORM used for working with databases.'
                        },

                        apiRest: {
                            titulo: 'REST APIs',
                            descricao: 'API development following REST principles.'
                        },

                        mediatr: {
                            titulo: 'MediatR',
                            descricao: 'Library used to implement the Mediator pattern.'
                        },

                        jwt: {
                            titulo: 'JWT',
                            descricao: 'Technology used for token-based authentication.'
                        },

                        sql: {
                            titulo: 'SQL',
                            descricao: 'Language used for querying and manipulating data.'
                        },

                        postgresql: {
                            titulo: 'PostgreSQL',
                            descricao: 'Relational database used in projects.'
                        },

                        sqlServer: {
                            titulo: 'SQL Server',
                            descricao: 'Relational database used in studies and projects.'
                        },

                        rabbitmq: {
                            titulo: 'RabbitMQ',
                            descricao: 'Message broker used for asynchronous communication between applications.'
                        },

                        docker: {
                            titulo: 'Docker',
                            descricao: 'Platform used to create and run containerized environments.'
                        },

                        testes: {
                            titulo: 'Automated Testing',
                            descricao: 'Practice used to verify software behavior and quality.'
                        },

                        identity: {
                            titulo: 'ASP.NET Core Identity',
                            descricao: 'System used for user management and authentication.'
                        },

                        angular: {
                            titulo: 'Angular',
                            descricao: 'Framework used for frontend application development.'
                        },

                        typescript: {
                            titulo: 'TypeScript',
                            descricao: 'Language used for frontend development with static typing.'
                        },

                        react: {
                            titulo: 'React',
                            descricao: 'Library used for frontend interface development.'
                        },

                        javascript: {
                            titulo: 'JavaScript',
                            descricao: 'Language used for web development.'
                        },

                        html: {
                            titulo: 'HTML',
                            descricao: 'Language used to structure web pages.'
                        },

                        css: {
                            titulo: 'CSS / SCSS',
                            descricao: 'Technologies used for styling and interface development.'
                        },

                        nodejs: {
                            titulo: 'Node.js',
                            descricao: 'Runtime used to execute JavaScript on the backend.'
                        },

                        java: {
                            titulo: 'Java',
                            descricao: 'Programming language studied during my training.'
                        },

                        git: {
                            titulo: 'Git',
                            descricao: 'Version control system used in software development.'
                        },

                        github: {
                            titulo: 'GitHub',
                            descricao: 'Platform used for hosting and collaborating on projects.'
                        },

                        vscode: {
                            titulo: 'Visual Studio Code',
                            descricao: 'Code editor used for application and software project development.'
                        }
                    }
                },
                contato: {
                    titulo: 'Get in touch',

                    apresentacao: 'I am open to opportunities, projects, and professional connections.',

                    email: 'Email',

                    linkedin: 'LinkedIn',

                    github: 'GitHub',

                    localizacao: 'Lages - SC, Brazil',

                    disponibilidade: 'Available for new opportunities'
                }
            },


            // =====================================================
            // ESPANHOL
            // =====================================================

            es: {

                navbar: {
                    sobre: 'Sobre mí',
                    projetos: 'Proyectos',
                    habilidades: 'Habilidades',
                    contato: 'Contacto'
                },

                sobre: {
                    titulo: 'Sobre mí',

                    apresentacao: {
                        inicio: 'Hola, soy',
                        destaque: 'Igor Mota De Mello'
                    },

                    conteudo: {
                        inicio: 'Soy Técnico en Informática y desarrollador de software en formación, actualmente orientando mi carrera hacia el desarrollo de aplicaciones, con enfoque en el desarrollo',

                        destaque: 'Full Stack',

                        meio: 'y mucho interés en el área de datos. Tengo experiencia de aprendizaje y práctica con',

                        destaque2: 'C# y .NET',

                        fim: ', además de tecnologías relacionadas con APIs, bases de datos, autenticación, mensajería, pruebas y desarrollo frontend.'
                    }
                },

                projetos: {
                    titulo: 'Proyectos',

                    apresentacao: 'Proyectos desarrollados durante mi formación',

                    conteudo: 'Aplicaciones que he desarrollado para poner en práctica conceptos de programación, arquitectura, APIs, bases de datos, frontend y buenas prácticas de desarrollo de software.',

                    demonstracao: 'Demostración',

                    repositorio: 'Repositorio',

                    cards: {

                        geradorCertificados: {
                            titulo: 'Generador de Certificados',
                            descricao: 'API para la generación y gestión de certificados.'
                        },

                        escolaCursos: {
                            titulo: 'Escuela de Cursos',
                            descricao: 'Aplicación para la gestión de cursos, estudiantes e información relacionada con un entorno educativo.'
                        },

                        controleMedicamentos: {
                            titulo: 'Control de Medicamentos',
                            descricao: 'Aplicación enfocada en el control y gestión de medicamentos, desarrollada para practicar conceptos de desarrollo de software.'
                        }
                    }
                },

                habilidades: {
                    titulo: 'Habilidades',

                    apresentacao: 'Tecnologías y herramientas',

                    conteudo: 'Tecnologías y herramientas que he estado estudiando y utilizando durante mi formación y desarrollo de proyectos de software.',

                    cards: {

                        dotnet: {
                            titulo: '.NET',
                            descricao: 'Plataforma utilizada para el desarrollo de aplicaciones.'
                        },

                        csharp: {
                            titulo: 'C#',
                            descricao: 'Lenguaje principal utilizado en el desarrollo backend.'
                        },

                        aspnet: {
                            titulo: 'ASP.NET Core',
                            descricao: 'Framework utilizado para el desarrollo de aplicaciones web y APIs.'
                        },

                        entityFramework: {
                            titulo: 'Entity Framework Core',
                            descricao: 'ORM utilizado para trabajar con bases de datos.'
                        },

                        apiRest: {
                            titulo: 'APIs REST',
                            descricao: 'Desarrollo de APIs siguiendo principios REST.'
                        },

                        mediatr: {
                            titulo: 'MediatR',
                            descricao: 'Biblioteca utilizada para implementar el patrón Mediator.'
                        },

                        jwt: {
                            titulo: 'JWT',
                            descricao: 'Tecnología utilizada para la autenticación basada en tokens.'
                        },

                        sql: {
                            titulo: 'SQL',
                            descricao: 'Lenguaje utilizado para consultar y manipular datos.'
                        },

                        postgresql: {
                            titulo: 'PostgreSQL',
                            descricao: 'Base de datos relacional utilizada en proyectos.'
                        },

                        sqlServer: {
                            titulo: 'SQL Server',
                            descricao: 'Base de datos relacional utilizada en estudios y proyectos.'
                        },

                        rabbitmq: {
                            titulo: 'RabbitMQ',
                            descricao: 'Message broker utilizado para la comunicación asíncrona entre aplicaciones.'
                        },

                        docker: {
                            titulo: 'Docker',
                            descricao: 'Plataforma utilizada para crear y ejecutar entornos containerizados.'
                        },

                        testes: {
                            titulo: 'Pruebas Automatizadas',
                            descricao: 'Práctica utilizada para verificar el comportamiento y la calidad del software.'
                        },

                        identity: {
                            titulo: 'ASP.NET Core Identity',
                            descricao: 'Sistema utilizado para la gestión de usuarios y autenticación.'
                        },

                        angular: {
                            titulo: 'Angular',
                            descricao: 'Framework utilizado para el desarrollo de aplicaciones frontend.'
                        },

                        typescript: {
                            titulo: 'TypeScript',
                            descricao: 'Lenguaje utilizado para el desarrollo frontend con tipado estático.'
                        },

                        react: {
                            titulo: 'React',
                            descricao: 'Biblioteca utilizada para el desarrollo de interfaces frontend.'
                        },

                        javascript: {
                            titulo: 'JavaScript',
                            descricao: 'Lenguaje utilizado para el desarrollo web.'
                        },

                        html: {
                            titulo: 'HTML',
                            descricao: 'Lenguaje utilizado para estructurar páginas web.'
                        },

                        css: {
                            titulo: 'CSS / SCSS',
                            descricao: 'Tecnologías utilizadas para la estilización y creación de interfaces.'
                        },

                        nodejs: {
                            titulo: 'Node.js',
                            descricao: 'Runtime utilizado para ejecutar JavaScript en el backend.'
                        },

                        java: {
                            titulo: 'Java',
                            descricao: 'Lenguaje de programación estudiado durante mi formación.'
                        },

                        git: {
                            titulo: 'Git',
                            descricao: 'Sistema de control de versiones utilizado en el desarrollo.'
                        },

                        github: {
                            titulo: 'GitHub',
                            descricao: 'Plataforma utilizada para alojar y colaborar en proyectos.'
                        },

                        vscode: {
                            titulo: 'Visual Studio Code',
                            descricao: 'Editor de código utilizado en el desarrollo de aplicaciones y proyectos de software.'
                        }
                    }
                },

                contato: {
                    titulo: 'Contáctame',

                    apresentacao: 'Estoy abierto a oportunidades, proyectos y conexiones profesionales.',

                    email: 'Correo electrónico',

                    linkedin: 'LinkedIn',

                    github: 'GitHub',

                    localizacao: 'Lages - SC, Brasil',

                    disponibilidade: 'Disponible para nuevas oportunidades'
                }
            }
        };

    alterarIdioma(idioma: OpcoesIdioma): void {
        this.idioma.set(idioma);
    }

    obterTraducoes() {
        return this.traducoes[this.idioma()];
    }
}