<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plan de integración

    //- Col Imagen y Texto
    .bloque-texto-g.bg-color-terciario-t20.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de integración sostenible permite alinear a todos los actores de la cadena hacia prácticas responsables con el entorno. Fomenta la eficiencia operativa reduciendo impactos ambientales y sociales negativos. Además, mejora la competitividad empresarial al cumplir con normativas y expectativas del mercado consciente.

    separador



    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10

        //- titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_3_1 3.1 Concepto

        //- Col4 y Col8
        .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
          .col-12.col-md-6.col-lg-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-8
            p El plan de integración sostenible de la cadena de suministro es un instrumento estratégico que permite articular de manera coherente todos los componentes relacionados con la sostenibilidad en operaciones logísticas. Incluye diagnóstico, formulación de objetivos, estrategias, recursos, indicadores y cronograma. Según David (2013), la integración fomenta la colaboración entre actores internos y externos, y promueve la sostenibilidad como eje transversal de la competitividad empresarial.

          separador
             
        //- titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_3_2 3.2 Estructura
          
        //- Col1 y Col11
        .container.mb-5
          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-5
            .col-6.col-lg-2.mb-2.mb-lg-0
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img03.svg', alt='imagen decorativa').mx-auto
            .col-12.col-md-12.col-lg-10.mb-4.mb-lg-0
              p.mb-0 La integración sostenible en las cadenas de suministro requiere una planificación estructurada que articule aspectos económicos, sociales y ambientales. Esta estructura permite alinear objetivos estratégicos con acciones operativas, facilitando la toma de decisiones informadas y el cumplimiento de estándares de sostenibilidad. A continuación se detallan los elementos claves para construir un plan integral bajo este enfoque:
        
          //- Col3 y Col9
          .container.mb-5
            .row.align-items-center(data-aos="fade-left")
              
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                //- Linea de tiempo
                LineaTiempoD.color-primario
                  .row(numero="1" titulo="Diagnóstico	")
                    p.mb-0 Se realiza un análisis de los procesos, recursos y actores de la cadena para identificar los puntos críticos de impacto, como el alto consumo de agua o el uso ineficiente de materiales.

                  .row(numero="2" titulo="Objetivos sostenibles")
                    p.mb-0 Son metas estratégicas y medibles (SMART) que orientan la gestión hacia la sostenibilidad, planteando reducciones en residuos, energía o fortalecimiento de buenas prácticas en proveedores.

                  .row(numero="3" titulo="Estrategias	")
                    p.mb-0 Comprenden las acciones específicas que impulsan la transformación sostenible de la producción, distribución y posventa, aplicando soluciones como materiales biodegradables o transporte limpio.

                  .row(numero="4" titulo="Cronograma")
                    p.mb-0 Define la secuencia temporal de actividades, organizadas por fases y responsables, facilitando la ejecución progresiva del plan desde el diagnóstico hasta su implementación completa.

                  .row(numero="5" titulo="Indicadores (KPIs)")
                    p.mb-0 Establecen las métricas que miden el avance y desempeño del plan en los ámbitos ambiental, social y económico, reflejando mejoras en eficiencia o reducción de emisiones.
                  
                  .row(numero="6" titulo="Presupuesto")
                    p.mb-0 Determina los costos asociados a cada actividad y las fuentes de financiación posibles, incluyendo recursos internos, créditos verdes o alianzas de cooperación para el desarrollo sostenible.
              
              
              .col-12.col-md-5.col-lg-3.mb-4.mb-lg-0.mx-auto
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen Decorativa')
          

          separador

          //- titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_3_3 3.3 Recursos

          //- Col4 y Col8
          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
            .col-12.col-md-8.col-lg-4
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-8
              p Para llevar a cabo de manera efectiva un plan de cadena de distribución verde, es indispensable disponer de una combinación estratégica de recursos que garanticen la viabilidad, sostenibilidad y permanencia del proyecto en el tiempo. Estos recursos no solo deben responder a las necesidades operativas, sino también a los retos ambientales, sociales y normativos que implica una transición hacia modelos responsables. A continuación, se detallan los principales tipos de recursos necesarios:



      .tarjeta.p-4.bg02
        .tarjeta--blanca.p-4
          SlyderA(tipo="b")
            .tarjeta
              .row.align-items-center.mx-auto.justify-content-center.px-2.px-lg-5
                .col-12.col-lg-4.col-md-8
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen Decorativa')
                .col-12.col-lg-8.col-md-12
                  h5.mb-4 Recursos humanos 
                  p El capital humano constituye la base para ejecutar y mantener una cadena de suministro sostenible. Involucra profesionales en logística, sostenibilidad, producción y aseguramiento de la calidad. La formación continua en economía circular, gestión ambiental, legislación verde y tecnologías aplicadas fortalece la cultura organizacional y promueve la mejora constante del desempeño sostenible.

            .tarjeta
              .row.align-items-center.mx-auto.justify-content-center.px-2.px-lg-5
                .col-12.col-lg-4.col-md-8
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img07.png', alt='Imagen Decorativa')
                .col-12.col-lg-8.col-md-12
                  h5.mb-4 Recursos tecnológicos
                  p Las tecnologías digitales facilitan el control, la trazabilidad y la toma de decisiones basada en datos. El uso de plataformas inteligentes, sensores de monitoreo y aplicaciones para calcular la huella de carbono permiten evaluar el consumo energético y las emisiones, impulsando la eficiencia operativa y la reducción de impactos ambientales en toda la cadena.

            .tarjeta
              .row.align-items-center.mx-auto.justify-content-center.px-2.px-lg-5
                .col-12.col-lg-4.col-md-8
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img08.png', alt='Imagen Decorativa')
                .col-12.col-lg-8.col-md-12
                  h5.mb-4 Recursos financieros
                  p La sostenibilidad requiere planificación e inversión. Es necesario contar con capital propio y gestionar fuentes externas como créditos verdes, fondos de cooperación, programas estatales y convocatorias de innovación. Una gestión financiera estratégica asegura la viabilidad del plan y el desarrollo progresivo de proyectos sostenibles en la organización.

            .tarjeta
              .row.align-items-center.mx-auto.justify-content-center.px-2.px-lg-5
                .col-12.col-lg-4.col-md-8
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen Decorativa')
                .col-12.col-lg-8.col-md-12
                  h5.mb-4 Recursos infraestructurales
                  p La infraestructura debe responder a los objetivos del plan de sostenibilidad. Comprende bodegas eficientes, puntos de clasificación de residuos y sistemas de transporte ecológico como vehículos eléctricos o flotas híbridas. También incluye el diseño de rutas y procesos logísticos de última milla orientados a minimizar el impacto ambiental.
        
      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_3_4 3.4 Etapas de elaboración

          p.mb-5 El desarrollo de un plan de integración sostenible en la cadena de suministro requiere seguir una secuencia estructurada de etapas. Cada fase permite construir, validar y optimizar estrategias alineadas con la sostenibilidad. La siguiente tabla presenta dichas etapas con sus descripciones y ejemplos aplicados.


      //- Col8 (Slider) y Col4
      .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen Decorativa')
          .col-12.col-lg-8.mb-4.mb-lg-0
            .custom-slider
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                  .numero 01
                  .row.justify-content-center.mb-3.pt-4
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema3/img11.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1.px-3 Planeación inicial
                    p.mb-0 Se definen el alcance del proyecto, los equipos de trabajo y las acciones de sensibilización sobre sostenibilidad, fomentando la apropiación de los principios de economía circular y consumo responsable.
                .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                  .numero 02
                  .row.justify-content-center.mb-3.pt-4
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema3/img12.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1.px-3 Diagnóstico
                    p.mb-0 Se analizan los procesos e impactos de la organización mediante herramientas como DOFA, análisis de ciclo de vida (ACV) y <em>benchmarking</em>, identificando oportunidades de mejora ambiental y social.

                .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                  .numero 03
                  .row.justify-content-center.mb-3.pt-4
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema3/img13.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1.px-3 Diseño
                    p.mb-0 Se establecen estrategias sostenibles y metas SMART alineadas con las áreas o procesos, orientadas a la optimización de recursos, reducción de residuos y mejora de la eficiencia energética.

                .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                  .numero 04
                  .row.justify-content-center.mb-3.pt-4
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema3/img14.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1.px-3  Planificación	 
                    p.mb-0 Se elabora un cronograma por fases con responsables, indicadores (KPIs) y recursos asignados, estructurando la transición hacia prácticas sostenibles de manera progresiva.

                .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                  .numero 05
                  .row.justify-content-center.mb-3.pt-4
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema3/img15.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1.px-3  Implementación piloto
                    p.mb-0 Se ejecutan pruebas o experiencias controladas en procesos seleccionados para validar la efectividad de las estrategias y realizar los ajustes necesarios antes de su expansión.

                .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                  .numero 06
                  .row.justify-content-center.mb-3.pt-4
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema3/img16.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1.px-3  Evaluación
                    p.mb-0 Se miden los resultados obtenidos frente a los indicadores definidos, mediante auditorías internas o externas, con el fin de valorar el impacto y el cumplimiento de los objetivos.

                .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                  .numero 07
                  .row.justify-content-center.mb-3.pt-4
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema3/img17.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1.px-3 Escalamiento
                    p.mb-0 Se amplía la aplicación del plan de sostenibilidad a toda la organización, incorporando las mejoras identificadas en las etapas anteriores y consolidando una cultura de mejora continua.


      separador

      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_5 3.5 Herramientas

      //- banner con tarjeta
      .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
        .col-lg-12.mb-2
          div.tarjeta-horz.mb-3
            img(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen decorativa')
            div.texto-tarjeta.bg-white
                p.mb-0 Las organizaciones que buscan integrar la sostenibilidad en sus cadenas de suministro requieren herramientas estratégicas que les permitan analizar su entorno, planificar acciones responsables y tomar decisiones informadas. Estas herramientas cuando se utilizan de forma adecuada fortalecen la competitividad y la reputación empresarial. 


      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Figura
          .mb-5(data-aos="zoom-in-down")
            .titulo-sexto.mb-4.color-acento-contenido
              h5 
                b Figura 1. 
                span Beneficios del diseño ecológico
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img19.png', alt='---').mx-auto.d-none.d-md-block
              img(src='@/assets/curso/temas/tema3/img19m.png', alt='---').mx-auto.d-block.d-md-none

            figcaption 
              b Fuente: 
              | SENA, 2025.



          //- Col4 y Col8
          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-5
            .col-12.col-md-6.col-lg-2
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img20.svg', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-10
              p Estas herramientas constituyen un soporte clave para el diseño de estrategias sostenibles, ya que facilitan la evaluación integral de los procesos, la identificación de riesgos y oportunidades, y la definición de acciones que promueven la eficiencia y la responsabilidad ambiental, social y económica dentro de la cadena de suministro. Se presenta una síntesis de cada una, destacando su propósito y aplicabilidad en la gestión sostenible:

          //- Acordion A
          TabsA.color-acento-botones.mb-5
          
            .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Matriz  DOFA verde")
              .row.align-items-center.h-100
                .col-12.col-lg-8.col-xl-7.order-2.order-lg-1
                  h4.mb-4 Matriz DOFA verde
                  p.mb-0 Herramienta estratégica que integra la sostenibilidad en el análisis de factores internos y externos de la organización. Permite identificar fortalezas, oportunidades, debilidades y amenazas ambientales o sociales, facilitando la planificación de acciones sostenibles y la priorización de proyectos con impacto positivo.

                .col-6.col-lg-4.col-xl-2.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema3/img21.svg', alt='Imagen decorativa').w-auto.mx-auto
            
            .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="<em>Benchmarking</em> sostenible")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 <em>Benchmarking</em> sostenible
                  p.mb-0 Proceso de comparación con referentes del sector que aplican buenas prácticas ambientales y sociales. Favorece la mejora continua, la innovación y la adopción de modelos de gestión sostenible alineados con los Objetivos de Desarrollo Sostenible.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema3/img22.svg', alt='Imagen decorativa').w-auto.mx-auto
            
            .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Análisis de ciclo de vida (ACV)	")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Análisis de ciclo de vida (ACV)	  
                  p.mb-0 Método técnico que evalúa los impactos ambientales de un producto o servicio desde su origen hasta su disposición final. Su aplicación permite optimizar el uso de recursos, reducir emisiones y fundamentar decisiones de ecodiseño y eficiencia operativa.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema3/img23.svg', alt='Imagen decorativa').w-auto.mx-auto
            
            .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Huella de carbono	")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Huella de carbono	  
                  p.mb-0 Indicador que mide las emisiones de gases de efecto invernadero generadas por una organización o proceso. Facilita la definición de metas de reducción, la implementación de estrategias de mitigación y la comunicación transparente de resultados ambientales.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema3/img24.svg', alt='Imagen decorativa').w-auto.mx-auto
            
            .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="<em>Balanced scorecard</em> verde")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 <em>Balanced scorecard</em> verde  
                  p.mb-0 Sistema de gestión que incorpora indicadores ambientales y sociales dentro del cuadro de mando integral. Permite monitorear el desempeño sostenible de la empresa y alinear los objetivos financieros con la responsabilidad ambiental y social corporativa.

                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2 
                  figure
                    img(src='@/assets/curso/temas/tema3/img25.svg', alt='Imagen decorativa').w-auto.mx-auto



          //- Cajon
          .cajon.bg-color-terciario-t5.p-4.mb-5
            p.mb-0 La elección de la herramienta depende del objetivo y del nivel de madurez sostenible de la organización. Mientras la matriz DOFA verde y el <em>benchmarking</em> son ideales para el diagnóstico inicial, el ACV y la huella de carbono permiten una evaluación técnica más profunda, y el <em>balanced scorecard</em> verde integra los resultados en la gestión estratégica.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
