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

type OpcoesIdioma = 'pt' | 'en' | 'es'
    ;

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
        };
    } = {

            // =========================
            // PORTUGUÊS
            // =========================

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
                        inicio: 'Olá, eu sou ',
                        destaque: 'Igor Mota De Mello.'
                    },

                    conteudo: {
                        inicio:
                            'Sou Técnico em Informática e ',

                        destaque:
                            'desenvolvedor de software em formação',

                        meio:
                            '. Estou construindo minha carreira na área de tecnologia, com foco no ',

                        destaque2:
                            'desenvolvimento de aplicações',

                        fim:
                            ' e no aprendizado contínuo. Gosto de transformar ideias em projetos e desafios em novas oportunidades para evoluir. Atualmente, direciono minha trajetória para o desenvolvimento Full Stack, buscando ampliar minha experiência tanto no desenvolvimento de aplicações quanto na construção de interfaces.'
                    }
                },

                projetos: {

                    titulo: 'Projetos',

                    apresentacao:
                        'Projetos que desenvolvi',

                    conteudo:
                        'Alguns dos projetos desenvolvidos durante minha formação, estudos e prática com desenvolvimento de software.',

                    demonstracao:
                        'Demonstração',

                    repositorio:
                        'Ver Repositório no GitHub',

                    cards: {

                        geradorCertificados: {

                            titulo:
                                'Gerador de Certificados',

                            descricao:
                                'Aplicação para geração e gerenciamento de certificados, permitindo o cadastro de cursos e alunos e a geração automatizada de certificados em PDF.'
                        },

                        escolaCursos: {

                            titulo:
                                'Escola de Cursos',

                            descricao:
                                'Aplicação para gerenciamento de alunos, professores, matrículas e cursos, permitindo operações de cadastro, edição, exclusão e visualização.'
                        },

                        controleMedicamentos: {

                            titulo:
                                'Controle de Medicamentos Web',

                            descricao:
                                'Aplicação para gerenciamento de pacientes, funcionários, medicamentos e receitas.'
                        }
                    }
                }
            },


            // =========================
            // INGLÊS
            // =========================

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
                        inicio: 'Hello, I am ',
                        destaque: 'Igor Mota De Mello.'
                    },

                    conteudo: {
                        inicio:
                            'I am an IT Technician and ',

                        destaque:
                            'a software developer in training',

                        meio:
                            '. I am building my career in technology, focusing on ',

                        destaque2:
                            'application development',

                        fim:
                            ' and continuous learning. I enjoy turning ideas into projects and challenges into opportunities to grow. Currently, I am pursuing a career in Full Stack development, seeking to expand my experience in both application development and interface design.'
                    }
                },

                projetos: {

                    titulo: 'Projects',

                    apresentacao:
                        'Projects I have developed',

                    conteudo:
                        'Some of the projects developed during my training, studies, and software development practice.',

                    demonstracao:
                        'Demo',

                    repositorio:
                        'View Repository on GitHub',

                    cards: {

                        geradorCertificados: {

                            titulo:
                                'Certificate Generator',

                            descricao:
                                'Application for generating and managing certificates, allowing the registration of courses and students and the automated generation of certificates in PDF format.'
                        },

                        escolaCursos: {

                            titulo:
                                'Course School',

                            descricao:
                                'Application for managing students, teachers, enrollments, and courses, allowing registration, editing, deletion, and viewing operations.'
                        },

                        controleMedicamentos: {

                            titulo:
                                'Web Medication Management',

                            descricao:
                                'Application for managing patients, employees, medications, and prescriptions.'
                        }
                    }
                }
            },


            // =========================
            // ESPANHOL
            // =========================

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
                        inicio: 'Hola, soy ',
                        destaque: 'Igor Mota De Mello.'
                    },

                    conteudo: {
                        inicio:
                            'Soy Técnico en Informática y ',

                        destaque:
                            'desarrollador de software en formación',

                        meio:
                            '. Estoy construyendo mi carrera en el área de tecnología, con enfoque en ',

                        destaque2:
                            'el desarrollo de aplicaciones',

                        fim:
                            ' y el aprendizaje continuo. Me gusta transformar ideas en proyectos y desafíos en nuevas oportunidades para crecer. Actualmente, estoy orientando mi trayectoria hacia el desarrollo Full Stack, buscando ampliar mi experiencia tanto en el desarrollo de aplicaciones como en la construcción de interfaces.'
                    }
                },

                projetos: {

                    titulo: 'Proyectos',

                    apresentacao:
                        'Proyectos que he desarrollado',

                    conteudo:
                        'Algunos de los proyectos desarrollados durante mi formación, estudios y práctica en desarrollo de software.',

                    demonstracao:
                        'Demostración',

                    repositorio:
                        'Ver Repositorio en GitHub',

                    cards: {

                        geradorCertificados: {

                            titulo:
                                'Generador de Certificados',

                            descricao:
                                'Aplicación para la generación y gestión de certificados, permitiendo registrar cursos y alumnos y generar certificados automáticamente en formato PDF.'
                        },

                        escolaCursos: {

                            titulo:
                                'Escuela de Cursos',

                            descricao:
                                'Aplicación para gestionar alumnos, profesores, matrículas y cursos, permitiendo realizar operaciones de registro, edición, eliminación y visualización.'
                        },

                        controleMedicamentos: {

                            titulo:
                                'Gestión de Medicamentos Web',

                            descricao:
                                'Aplicación para gestionar pacientes, empleados, medicamentos y recetas.'
                        }
                    }
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