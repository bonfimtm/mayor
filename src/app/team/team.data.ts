export interface TeamMember {
    name: string;
    role: string;
    oab: string;
    image: string;
    alt: string;
    paragraphs: string[];
}

export const teamMembers: TeamMember[] = [{
    name: 'Lara Kethllin Maia Damasceno',
    role: 'Advogada',
    oab: 'OAB/BA 75.169',
    image: 'lara',
    alt: 'Lara Kethllin Maia Damasceno, advogada da NB Advocacia',
    paragraphs: [
        `Advogada inscrita na Ordem dos Advogados do Brasil, Seccional Bahia (OAB/BA nº 75.169),
        graduada em Direito pela Universidade Católica do Salvador (UCSAL).`,
        `Pós-graduada em Direito Civil e Processo Civil, com especialização em Direito de Família, atua
        com foco na orientação e defesa de clientes em questões familiares e cíveis, conciliando rigor
        técnico e atendimento humanizado.`,
        `Comprometida com a ética profissional e com a busca de soluções jurídicas eficazes, dedica-se a
        acompanhar cada caso de forma personalizada, zelando pelos interesses e direitos de seus clientes.`
    ]
}, {
    name: 'Breno Cruz',
    role: 'Advogado',
    oab: 'OAB/BA 86.635',
    image: 'breno',
    alt: 'Breno Cruz, advogado da NB Advocacia',
    paragraphs: [
        `Advogado inscrito na Ordem dos Advogados do Brasil, Seccional Bahia (OAB/BA nº 86.635),
        graduado em Direito pela Universidade Católica do Salvador (UCSAL).`,
        `Especialista em Direito do Consumidor, Direito Bancário e Direito Digital, atua na defesa dos
        direitos de consumidores e na resolução de demandas envolvendo instituições financeiras, relações
        de consumo e questões decorrentes do ambiente digital, sempre pautado pela técnica jurídica e pela
        atuação estratégica.`,
        `Exerce a advocacia com comprometimento, transparência e responsabilidade, oferecendo um atendimento
        próximo e individualizado. Seu objetivo é proporcionar soluções jurídicas seguras e eficientes,
        assegurando a proteção dos direitos e interesses de cada cliente com excelência e dedicação.`
    ]
}, {
    name: 'Gabriella Oliveira Maia Braga',
    role: 'Advogada',
    oab: 'OAB/BA 90.682',
    image: 'gabriella',
    alt: 'Gabriella Oliveira Maia Braga, advogada da NB Advocacia',
    paragraphs: [
        `Advogada inscrita na Ordem dos Advogados do Brasil, Seccional Bahia (OAB/BA nº 90.682),
        graduada em Direito pela Universidade Salvador (UNIFACS).`,
        `Pós-graduanda em Direito Público e em Direito e Processo do Consumidor, possui formação voltada ao
        constante aperfeiçoamento técnico e à atuação jurídica responsável. Atua com foco em Direito do
        Trabalho, prestando orientação e acompanhamento em demandas trabalhistas, com atenção à análise
        processual, elaboração de peças, participação em audiências e busca por soluções jurídicas eficazes.`,
        `Exerce a advocacia com ética, organização e comprometimento, oferecendo atendimento humanizado e
        atuação técnica na defesa dos direitos e interesses dos clientes. Também contribui, de forma
        colaborativa, no suporte às demais demandas do escritório, sempre com responsabilidade, cuidado e
        dedicação.`
    ]
}];
