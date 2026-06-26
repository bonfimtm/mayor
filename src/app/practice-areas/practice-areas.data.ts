interface Block {
    type: 'paragraph' | 'heading' | 'list';
    text?: string;
    items?: string[];
}

export interface PracticeArea {
    title: string;
    subtitle: string;
    blocks: Block[];
}

export const practiceAreas: PracticeArea[] = [{
    title: 'Direito de Família',
    subtitle: 'Atendimento humanizado para os momentos mais importantes da sua vida',
    blocks: [{
        type: 'paragraph',
        text: `Questões familiares exigem sensibilidade, experiência e segurança jurídica. Atuamos na defesa dos
        direitos das famílias, buscando sempre soluções consensuais quando possível, sem abrir mão da firme defesa
        dos interesses de nossos clientes.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Divórcio consensual e litigioso;',
            'Guarda de filhos;',
            'Regulamentação de visitas;',
            'Pensão alimentícia;',
            'Investigação e reconhecimento de paternidade;',
            'Inventário e partilha;',
            'União estável;',
            'Interdição;',
            'Curatela.'
        ]
    }]
}, {
    title: 'Direito Trabalhista',
    subtitle: 'Defesa dos direitos de trabalhadores e empregadores',
    blocks: [{
        type: 'paragraph',
        text: `Nossa equipe atua tanto na defesa dos trabalhadores quanto na consultoria para empresas, oferecendo
        soluções jurídicas estratégicas para prevenir passivos e garantir o cumprimento da legislação trabalhista.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Verbas rescisórias;',
            'Horas extras;',
            'Reconhecimento de vínculo empregatício;',
            'Acidentes de trabalho;',
            'Assédio moral;',
            'Rescisão indireta;',
            'FGTS;',
            'Estabilidade;',
            'Defesa empresarial em reclamações trabalhistas.'
        ]
    }]
}, {
    title: 'Direito Previdenciário',
    subtitle: 'Garanta seus benefícios junto ao INSS',
    blocks: [{
        type: 'paragraph',
        text: `Prestamos assessoria completa para segurados do INSS, desde pedidos administrativos até ações judiciais
        para obtenção ou revisão de benefícios.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Aposentadorias;',
            'Auxílio-doença;',
            'Benefício por incapacidade permanente;',
            'Pensão por morte;',
            'BPC/LOAS;',
            'Salário-maternidade;',
            'Revisões de benefícios;',
            'Planejamento previdenciário;',
            'Restituição de descontos indevidos.'
        ]
    }]
}, {
    title: 'Direito do Consumidor',
    subtitle: 'Protegendo seus direitos nas relações de consumo',
    blocks: [{
        type: 'paragraph',
        text: `Quando fornecedores descumprem a lei, o consumidor possui diversos direitos garantidos. Atuamos na
        solução de conflitos envolvendo bancos, planos de saúde, comércio eletrônico, companhias aéreas, telefonia
        e demais relações de consumo.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Cobranças indevidas;',
            'Negativação indevida;',
            'Indenizações;',
            'Produtos com defeito;',
            'Cancelamento de contratos;',
            'Problemas com bancos;',
            'Golpes bancários;',
            'Direito do passageiro aéreo;',
            'Revisão contratual.'
        ]
    }]
}, {
    title: 'Direito Penal',
    subtitle: 'Defesa técnica em todas as fases da persecução penal',
    blocks: [{
        type: 'paragraph',
        text: `A atuação criminal exige rapidez, estratégia e profundo conhecimento jurídico. Prestamos defesa técnica
        em investigações, inquéritos policiais e processos criminais, garantindo a observância dos direitos
        constitucionais do cliente.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Prisões em flagrante;',
            'Audiências de custódia;',
            'Habeas Corpus;',
            'Defesa em ações penais;',
            'Tribunal do Júri;',
            'Recursos criminais;',
            'Crimes patrimoniais;',
            'Crimes contra a Administração Pública;',
            'Crimes eleitorais.'
        ]
    }]
}, {
    title: 'Direito Eleitoral',
    subtitle: 'Segurança jurídica para candidatos, partidos e agentes públicos',
    blocks: [{
        type: 'paragraph',
        text: `Com ampla experiência em Direito Eleitoral, prestamos consultoria preventiva e atuação contenciosa para
        candidatos, partidos políticos, prefeitos, vereadores e demais agentes públicos.`
    }, {
        type: 'paragraph',
        text: `Nossa atuação busca prevenir irregularidades, garantir campanhas dentro da legislação e defender os
        direitos políticos de nossos clientes.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Registro de candidatura;',
            'Prestação de contas;',
            'Consultoria eleitoral;',
            'Ações eleitorais;',
            'Defesa em investigações eleitorais;',
            'AIJE;',
            'AIME;',
            'Representações eleitorais;',
            'Direito partidário;',
            'Propaganda eleitoral.'
        ]
    }]
}, {
    title: 'Direito Municipal',
    subtitle: 'Assessoria jurídica especializada para Municípios e gestores públicos',
    blocks: [{
        type: 'paragraph',
        text: `Oferecemos consultoria e representação jurídica para Prefeituras, Câmaras Municipais, gestores públicos
        e agentes políticos, com foco na prevenção de riscos e na segurança jurídica da Administração Pública.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Licitações e contratos;',
            'Servidores públicos;',
            'Improbidade administrativa;',
            'Processos administrativos;',
            'Pareceres jurídicos;',
            'Controle interno;',
            'Consultoria legislativa;',
            'Atuação perante Tribunais de Contas;',
            'Direito Administrativo.'
        ]
    }]
}, {
    title: 'Advocacia Empresarial',
    subtitle: 'Soluções jurídicas para empresas crescerem com segurança',
    blocks: [{
        type: 'paragraph',
        text: `Apoiamos empresas de todos os portes na tomada de decisões estratégicas, oferecendo assessoria
        preventiva e atuação em demandas judiciais e administrativas.`
    }, {
        type: 'heading',
        text: 'Atuamos em:'
    }, {
        type: 'list',
        items: [
            'Consultoria empresarial;',
            'Elaboração de contratos;',
            'Recuperação de créditos;',
            'Cobranças;',
            'Direito societário;',
            'Compliance;',
            'Gestão de riscos jurídicos;',
            'Proteção patrimonial;',
            'Negociações empresariais.'
        ]
    }]
}, {
    title: 'Consultoria Jurídica',
    subtitle: 'Orientação estratégica para prevenir problemas e reduzir riscos',
    blocks: [{
        type: 'paragraph',
        text: `A prevenção é a forma mais eficiente de evitar litígios. Nossa consultoria jurídica oferece suporte
        contínuo para pessoas físicas, empresas e órgãos públicos, auxiliando na tomada de decisões seguras e
        juridicamente fundamentadas.`
    }, {
        type: 'paragraph',
        text: `Prestamos acompanhamento personalizado, emissão de pareceres, análise contratual e orientação
        estratégica para proteger os interesses de nossos clientes.`
    }]
}, {
    title: 'Direito Bancário',
    subtitle: 'Defesa dos seus direitos contra bancos e instituições financeiras',
    blocks: [{
        type: 'paragraph',
        text: `As relações entre consumidores e instituições financeiras devem observar a legislação vigente e os
        princípios da boa-fé, da transparência e do equilíbrio contratual. A NB Advocacia, Assessoria e Consultoria
        atua na defesa de pessoas físicas e jurídicas contra práticas abusivas de bancos, financeiras e demais
        instituições de crédito.`
    }, {
        type: 'paragraph',
        text: `Nossa equipe oferece atendimento estratégico para identificar irregularidades, recuperar valores
        cobrados indevidamente e buscar soluções judiciais e extrajudiciais que assegurem os direitos de nossos
        clientes.`
    }, {
        type: 'heading',
        text: 'Como podemos ajudar?'
    }, {
        type: 'paragraph',
        text: 'Prestamos assessoria jurídica em casos como:'
    }, {
        type: 'list',
        items: [
            'Cobranças e tarifas bancárias indevidas;',
            'Empréstimos e financiamentos com cláusulas abusivas;',
            'Revisão de contratos bancários;',
            'Descontos indevidos em aposentadorias e benefícios do INSS;',
            'Cartão de crédito consignado (RMC) contratado sem autorização;',
            'Empréstimos fraudulentos;',
            'Fraudes bancárias e golpes via PIX;',
            'Saques, transferências e compras não reconhecidas;',
            'Negativação indevida em cadastros de inadimplentes;',
            'Indenização por falhas na prestação de serviços bancários;',
            'Restituição de valores cobrados indevidamente;',
            'Defesa em ações de busca e apreensão de veículos;',
            'Renegociação de dívidas e acordos bancários.'
        ]
    }, {
        type: 'heading',
        text: 'Atendimento especializado'
    }, {
        type: 'paragraph',
        text: `Cada situação é analisada de forma individual, buscando a estratégia jurídica mais adequada para
        proteger o patrimônio e os direitos do cliente. Atuamos tanto na esfera administrativa quanto judicial,
        sempre com foco na solução eficiente do conflito.`
    }, {
        type: 'heading',
        text: 'Por que escolher a NB Advocacia?'
    }, {
        type: 'list',
        items: [
            'Atendimento personalizado e transparente;',
            'Análise técnica detalhada de contratos e cobranças;',
            'Atuação preventiva e contenciosa;',
            'Defesa dos direitos do consumidor frente às instituições financeiras;',
            'Atendimento presencial e online para todo o Brasil.'
        ]
    }]
}];
