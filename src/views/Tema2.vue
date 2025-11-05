<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias sostenibles 

    .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
      .col-12.col-md-12.col-lg-10

        //- Col9 (Slider) y Col3
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen Decorativa')
          .col-12.col-xl-8.mb-4.mb-lg-0
              //- Cajon
              .cajon.bg-color-primario-p10.p-4
                p.mb-0 En definitiva, los objetivos sostenibles permiten que las decisiones logísticas sean responsables, medibles y orientadas al equilibrio entre rentabilidad, cuidado ambiental y compromiso social, constituyendo la base para la gestión de cadenas de suministro modernas y sostenibles.

                p En un entorno global cada vez más competitivo y regulado, la implementación de estrategias sostenibles en la cadena de suministro es crucial para asegurar la viabilidad a largo plazo de las organizaciones. Estas estrategias permiten reducir impactos ambientales, mejorar la reputación corporativa y generar eficiencia operativa. Además, se alinean con los Objetivos de Desarrollo Sostenible (ODS), impulsando una economía más responsable y resiliente (World Economic Forum, 2020).
    
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_1 2.1 Concepto

    
    //- Col Imagen y Texto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las estrategias sostenibles en la cadena de suministro se refieren a las acciones planeadas e integradas que permiten minimizar el impacto ambiental y social de las operaciones logísticas, productivas y comerciales. Estas estrategias abarcan todo el recorrido de la cadena, iniciando con la elección de los proveedores y el desarrollo del producto, e incluyendo el transporte, el uso por parte del cliente y el destino final del bien tras su vida útil. Según Kotler y Keller (2021), integrar la sostenibilidad en las decisiones estratégicas no solo genera valor económico, sino que mejora la percepción de marca y reduce riesgos legales y reputacionales.

    separador

    .row.align-items-center.justify-content-center
      .col-12.col-md-12.col-lg-10

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_2_2 2.2 Tipos

        //- Col3 y Col9
        .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
          .col-12.col-md-12.col-lg-9
            p Las estrategias sostenibles en la cadena de suministro agrupan acciones orientadas a integrar la responsabilidad ambiental, social y económica en cada eslabón productivo. Su propósito es optimizar los recursos, minimizar los impactos negativos y fortalecer la competitividad empresarial desde un enfoque ético y de innovación. Estas estrategias impulsan modelos de negocio circulares, colaborativos y digitalizados, favoreciendo la transparencia y la trazabilidad a lo largo del ciclo de vida del producto.
          .col-12.col-md-8.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img03.svg', alt='Imagen Decorativa')

        .row.align-items-center(data-aos="fade-left").mb-3
          .col-12.col-md-4.col-lg-3.mb-4.mb-lg-0.mx-auto.order-2.order-lg-1.d-none.d-lg-block
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0.order-1.order-lg-2
            //- Acordion
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              div(titulo="Ecodiseño")
                  p Promueve el desarrollo de productos y servicios con bajo impacto ambiental, optimizando materiales, energía y residuos desde la etapa de diseño hasta su disposición final.
              div(titulo="<em>Sourcing</em> responsable")
                  p Selecciona proveedores bajo criterios éticos, sociales y ambientales, priorizando la transparencia, el cumplimiento normativo y el desarrollo sostenible de las comunidades vinculadas.
              div(titulo="Logística inversa")
                  p Integra procesos de retorno, recuperación o reciclaje de materiales posconsumo, fomentando la circularidad y la valorización de residuos dentro de la cadena.
              div(titulo="Energía renovable	")
                  p Sustituye fuentes fósiles por energías limpias o mixtas, fortaleciendo la eficiencia energética y reduciendo emisiones de gases de efecto invernadero.
              div(titulo="Digitalización verde	")
                  p Implementa tecnologías de información para optimizar procesos logísticos, reducir el consumo de recursos y mejorar la trazabilidad ambiental de las operaciones.
              div(titulo="Transporte sostenible	")
                  p Adopta soluciones de movilidad baja en carbono, como vehículos eléctricos, sistemas compartidos o rutas optimizadas, para disminuir la huella ambiental del transporte.
              div(titulo="Alianzas sostenibles	")
                  p Establece colaboraciones estratégicas entre empresas, instituciones, comunidades y organizaciones, potenciando la innovación y la responsabilidad social compartida.

        separador
         
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_2_3 2.3.	Metodología de diseño


        PasosA.color-acento-contenido.mb-5(tipo="n")(data-aos="fade-left")
          .row
            .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/temas/tema2/img05.svg', alt='Texto que describa la imagen')
            .col-lg-9
              h4 Diagnóstico de procesos	
              p Se analizan los procesos operativos para detectar áreas con mayor consumo de recursos o generación de impactos ambientales, sociales o económicos.

          .row
            .col-lg-9.order-2.order-lg-1
              h4 Generación de iniciativas	 
              p Se formulan propuestas de mejora orientadas a la sostenibilidad, considerando su impacto positivo, viabilidad técnica y alineación con los objetivos organizacionales.
            .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img06.svg', alt='Texto que describa la imagen')
            
          .row
            .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/temas/tema2/img07.svg', alt='Texto que describa la imagen')
            .col-lg-9
              h4 Priorización de acciones
              p Se jerarquizan las iniciativas según su urgencia, costo beneficio y facilidad de implementación, comenzando por las de mayor efecto inmediato y menor inversión.

              
          .row
            .col-lg-9.order-2.order-lg-1
              h4 Planificación estratégica
              p Se diseña un plan estructurado con responsables, tiempos y recursos definidos, que permita ejecutar las acciones sostenibles de manera ordenada y progresiva.
            .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img08.svg', alt='Texto que describa la imagen')
            
          .row
            .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/temas/tema2/img09.svg', alt='Texto que describa la imagen')
            .col-lg-9
              h4 Evaluación y mejora continua
              p Se monitorean los resultados mediante indicadores clave de desempeño (KPIs), ajustando el plan para mantener la eficacia y promover la innovación constante.

              



</template>

<script>
export default {
  name: 'Tema2',
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
