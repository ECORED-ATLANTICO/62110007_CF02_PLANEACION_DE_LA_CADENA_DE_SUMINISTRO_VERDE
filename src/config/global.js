export default {
  global: {
    Name: 'Diseño del plan de la cadena de suministro sostenible',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos del diseño de la cadena de suministro sostenible. Explora objetivos, estrategias y planificación de integración verde, así como metodologías y herramientas de gestión. Permite al aprendiz establecer planes eficientes y sostenibles, optimizando recursos y alineando procesos con modelos y normativas de sostenibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Objetivos de la cadena de suministro ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metodología de diseño',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aplicabilidad',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias sostenibles ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Metodología de diseño',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de integración ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Recursos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Etapas de elaboración',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de integración',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Planeación estratégica</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1yAOUdaaYxc',
    },
    {
      tema: 'Plan de integración',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022).<em> Plan de acción</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://m.youtube.com/watch?v=eFJOKJMVsQs',
    },
  ],
  glosario: [
    {
      termino: 'ACV',
      significado:
        'Herramienta que permite evaluar los impactos ambientales de un producto o proceso desde su origen hasta su disposición final.',
    },
    {
      termino: 'Balanced scorecard verde',
      significado:
        'Cuadro de mando integral que incorpora indicadores ambientales y sociales junto a los financieros para medir el desempeño sostenible.',
    },
    {
      termino: 'Benchmarking',
      significado:
        'Comparación de procesos o prácticas con empresas líderes para identificar oportunidades de mejora.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Conjunto de procesos que permiten el flujo de bienes y servicios desde el proveedor hasta el cliente final.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'Etapas por las que pasa un producto desde la extracción de materias primas hasta su disposición final.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Herramienta de planificación que organiza actividades, tiempos y responsables en un plan.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Modelo de desarrollo que satisface las necesidades actuales sin comprometer las de las futuras generaciones.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Análisis inicial de procesos, recursos y actores clave para identificar oportunidades de mejora.',
    },
    {
      termino: 'DOFA Verde',
      significado:
        'Adaptación de la matriz DOFA que considera aspectos ambientales y sociales en el análisis estratégico.',
    },
    {
      termino: 'Ecodiseño',
      significado:
        'Diseño de productos que reduce el impacto ambiental en todas sus etapas de vida.',
    },
    {
      termino: 'Estrategia sostenible',
      significado:
        'Conjunto de acciones planificadas que integran objetivos ambientales, sociales y económicos.',
    },
    {
      termino: 'Huella de carbono',
      significado:
        'Medida de las emisiones de gases de efecto invernadero generadas directa o indirectamente por una organización o producto.',
    },
    {
      termino: 'Indicador (KPI)',
      significado:
        'Valor cuantificable que permite medir el desempeño de un proceso o estrategia.',
    },
    {
      termino: 'Integración sostenible',
      significado:
        'Proceso de incorporar criterios de sostenibilidad en todos los niveles de la cadena de suministro.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'Gestión del retorno de productos, envases o residuos desde el consumidor al origen para su reaprovechamiento.',
    },
    {
      termino: 'Objetivo SMART',
      significado:
        'Meta específica, medible, alcanzable, relevante y con un plazo definido.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'Documento que organiza las actividades necesarias para alcanzar un objetivo, con responsables y tiempos definidos.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Equilibrio entre crecimiento económico, bienestar social y protección del medio ambiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ávila Gómez, D. C. (2014). <em>Cadena de abastecimiento sostenible: marco teórico y beneficios.</em> Universidad Militar Nueva Granada.',
      link:
        'https://repository.umng.edu.co/bitstream/handle/10654/11661/Diana%20Carolina%20Avila%20Gomez%202014.pdf?sequence=1',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2013). <em>Administración de la cadena de suministro: Estrategia, planeación y operación</em> (5ª ed.). Pearson Educación.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). <em>Anexo 2: Tendencias de mercado de los negocios verdes del Plan Nacional de Negocios Verdes 2022–2030.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/11/Anexo2-Tendencias-de-mercado-de-NV-del-PNNV-2022-2030.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2023).<em> Catálogo de negocios verdes 2023.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2023/12/CATALOGO-NEGOCIOS-VERDES-2023-4.pdf',
    },
    {
      referencia:
        'Rodríguez-Guevara, E. G., García-Bonilla, D. A., & Pineda-Ospina, D. L. (2024).<em> Prácticas de gestión sostenible en las cadenas de suministro.</em> Universidad del Valle.',
      link:
        'https://www.researchgate.net/publication/378836283_Practicas_de_gestion_sostenible_en_las_cadenas_de_suministro',
    },
    {
      referencia:
        'Srivastava, S. K. (2007).<em> Gestión de la cadena de suministro verde: integración del pensamiento ambiental. En La gestión de la cadena de suministro sostenible: análisis de integración.</em> Universidad Complutense de Madrid.',
      link:
        'https://docta.ucm.es/bitstreams/551ec71b-a4cd-4a4b-8a2f-0fff4fb1ece8/download',
    },
    {
      referencia:
        'Torres-Salazar, M., Rivas-Torres, A., & Martínez-Aguilar, E. (2016).<em> Talento verde y cadenas de suministro verdes: ¿existe una relación significativa? Revista Nova Scientia,</em> 8(1), 421–454.',
      link: 'https://www.redalyc.org/pdf/2033/203345704021.pdf',
    },
    {
      referencia:
        'Ulloa, J. C. (2023).<em> Revisión de literatura sobre gestión de cadenas de suministro sostenible.</em> Universidad del Rosario.',
      link:
        'https://revistas.urosario.edu.co/index.php/empresa/article/download/12734/11586/57840',
    },
    {
      referencia:
        'WWF Sustainable Consumption Platform. (2022). <em>Guía de abastecimiento sostenible.</em> WWF SCP.',
      link:
        'https://www.wwf-scp.org/wp-content/uploads/2022/09/Guia-de-abastecimiento-sostenible_B14S_C5_web.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera ',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
