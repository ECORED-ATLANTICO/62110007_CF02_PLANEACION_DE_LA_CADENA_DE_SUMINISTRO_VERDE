<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Objetivos de la cadena de suministro 
 
    //- Col3 y Col9
    .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
      .col-12.col-md-6.col-lg-2
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.svg', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-8
        p Los productos y servicios verdes protegen el medio ambiente, fomentan la economía circular y promueven un consumo más responsable. Contribuyen a mitigar el cambio climático y a conservar los recursos naturales. Además, fortalecen la imagen empresarial y responden a las demandas de consumidores cada vez más conscientes.

    
    .bg-full-width.bg01
      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_1 1.1 Concepto

          p Los objetivos de una cadena de suministro sostenible son metas estratégicas que orientan la planificación, operación y evaluación de la cadena, incorporando criterios ambientales, sociales y económicos. Su finalidad es garantizar eficiencia operativa, reducir impactos negativos en el entorno y generar valor compartido para todas las partes interesadas. 


      //- Col3 y Col9
      .container.mb-5
        .row.align-items-center.bg-color-primario-p10.p-4(data-aos="fade-left").icono-inferior
          .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            p No limitándose únicamente a indicadores financieros, estos objetivos buscan:
            ul.bullets
              li Disminuir la huella de carbono y promover prácticas ecológicas.
              li Optimizar el uso de recursos naturales y fomentar la eficiencia en los procesos.
              li Impulsar el comercio justo y la ética en la relación con proveedores y clientes.
              li Incluir y beneficiar a comunidades vulnerables, promoviendo desarrollo social.
              li Asegurar transparencia y trazabilidad de productos y procesos.
    
    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10

        //- Cajon
        .cajon.bg-color-terciario-t5.p-4.mb-5
          p.mb-0 En definitiva, los objetivos sostenibles permiten que las decisiones logísticas sean responsables, medibles y orientadas al equilibrio entre rentabilidad, cuidado ambiental y compromiso social, constituyendo la base para la gestión de cadenas de suministro modernas y sostenibles.

        separador

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_2 1.2 Tipos

        //- Acordion A
        TabsA.color-acento-botones.mb-5
        
          .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Ambiental")
            .row.align-items-center.h-100
              .col-12.col-lg-8.col-xl-7.order-2.order-lg-1
                h4.mb-4 Ambiental
                p Reducen el impacto ambiental de las operaciones logísticas, incluyendo emisiones, residuos y consumo energético, promoviendo prácticas sostenibles y responsables con el entorno.
              .col-6.col-lg-4.col-xl-2.mb-4.mx-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img04.svg', alt='Imagen decorativa').w-auto.mx-auto
          
          .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Social")
            .row.align-items-center.h-100
              .col-12.col-xl-8.order-2.order-lg-1
                h4.mb-4 Social
                p Fomentan la equidad, la inclusión y la mejora de la calidad de vida de colaboradores y comunidades, impulsando respeto por los derechos laborales y la responsabilidad social.
              .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img05.svg', alt='Imagen decorativa').w-auto.mx-auto
          
          .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Económico	")
            .row.align-items-center.h-100
              .col-12.col-xl-8.order-2.order-lg-1
                h4.mb-4 Económico	  
                p Buscan eficiencia en costos y fortalecimiento financiero sin comprometer la sostenibilidad, asegurando que la rentabilidad se logre de manera responsable y sostenible.
              .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img06.svg', alt='Imagen decorativa').w-auto.mx-auto
          
          .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Tecnológico")
            .row.align-items-center.h-100
              .col-12.col-xl-8.order-2.order-lg-1
                h4.mb-4 Tecnológico  
                p Aplican innovación y digitalización para hacer más sostenibles los procesos logísticos, optimizando recursos y reduciendo impactos ambientales mediante tecnologías limpias y digitales.
              .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img07.svg', alt='Imagen decorativa').w-auto.mx-auto
          
          .tarjeta.bg-color-terciario-t5.p-4.px-5(titulo="Regulatorio")
            .row.align-items-center.h-100
              .col-12.col-xl-8.order-2.order-lg-1
                h4.mb-4 Regulatorio  
                p Garantizan el cumplimiento de normas ambientales, laborales y comerciales vigentes, asegurando estándares nacionales e internacionales y minimizando riesgos legales y regulatorios.
              .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2 
                figure
                  img(src='@/assets/curso/temas/tema1/img08.svg', alt='Imagen decorativa').w-auto.mx-auto

        separador

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_3 1.3 Metodología de diseño

        //- Col3 y Col9
        .container.mb-4
          .row.align-items-center(data-aos="fade-left")
            .col-12.col-md-8.col-lg-3.mx-auto
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img22.svg', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-9
              p El diseño de objetivos sostenibles debe responder a un enfoque metodológico riguroso que permita que estos objetivos sean claros, medibles, alcanzables y alineados con la estrategia organizacional. Se recomienda seguir el enfoque SMART (específicos, medibles, alcanzables, relevantes y con tiempo definido) y combinarlo con herramientas de diagnóstico ambiental y social, como el análisis de ciclo de vida, matriz de impactos, evaluaciones de riesgo y encuestas participativas.

    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mb-4.mb-lg-0
          .custom-slider
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                .numero 01
                .row.justify-content-center.mb-3.pt-4
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema1/img09.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                .text-center
                  H5.bg-color-secundario.py-1.px-3 Diagnóstico de la situación actual
                  p.mb-0 Se identifican procesos críticos en términos de sostenibilidad, se realiza un análisis del ciclo de vida (ACV) del producto y se evalúan riesgos sociales y regulatorios asociados a la operación.
              .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                .numero 02
                .row.justify-content-center.mb-3.pt-4
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema1/img10.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                .text-center
                  H5.bg-color-secundario.py-1.px-3  Identificación de áreas de impacto
                  p.mb-0 Se determinan los principales impactos a mitigar (como el consumo de agua o generación de residuos) y las oportunidades de mejora (como aplicar principios de economía circular o uso de energía solar).
              .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                .numero 03
                .row.justify-content-center.mb-3.pt-4
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema1/img11.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                .text-center
                  H5.bg-color-secundario.py-1.px-3  Formulación de objetivos SMART
                  p.mb-0 Los objetivos deben ser S (específicos), M (medibles), A (alcanzables), R (relevantes) y T (con un tiempo definido).
              .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                .numero 04
                .row.justify-content-center.mb-3.pt-4
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema1/img12.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                .text-center
                  H5.bg-color-secundario.py-1.px-3  Asignación de responsables
                  p.mb-0 Se asigna un equipo o persona responsable de ejecutar cada objetivo, con funciones claras y recursos disponibles.
              .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                .numero 05
                .row.justify-content-center.mb-3.pt-4
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema1/img13.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                .text-center
                  H5.bg-color-secundario.py-1.px-3  Definición de indicadores clave (KPI)
                  p.mb-0 Se establecen indicadores que permitan evaluar el avance de los objetivos y medir resultados de manera objetiva.
              .tarjeta.shadow.p-4.bg-white.bg-white.position-relative
                .numero 06
                .row.justify-content-center.mb-3.pt-4
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema1/img14.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-85.mb-2
                .text-center
                  H5.bg-color-secundario.py-1.px-3  Monitoreo y ajuste	
                  p.mb-0 Se implementan mecanismos para el seguimiento de resultados (informes, auditorías internas o externas, certificaciones ambientales) y ajustes necesarios en el plan.


        .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen Decorativa')

    .bg-full-width.bg01
      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_4 1.4 Aplicabilidad

          //- Col9 (Slider) y Col3
          .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
            .col-12.col-lg-4.mb-4.mb-lg-0.d-xl-block.d-none
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen Decorativa')
            .col-12.col-xl-8.mb-4.mb-lg-0
              p Los objetivos sostenibles en la cadena de suministro se pueden implementar en todo tipo de organizaciones, sin importar su tamaño o sector económico. Esto se debe a que los impactos ambientales, sociales y económicos se presentan en todos los eslabones productivos y comerciales, y abordarlos estratégicamente genera valor compartido, fortalece la competitividad y optimiza la gestión de riesgos (Seuring & Müller, 2008).
              p Organizaciones internacionales como el World Economic Forum (2020) y la Organización de las Naciones Unidas para el Desarrollo Industrial – ONUDI (2019) destacan que avanzar hacia modelos sostenibles es una oportunidad clave para integrar prácticas responsables en los sistemas de producción, distribución y consumo. La aplicabilidad de los objetivos sostenibles se extiende a diversos sectores, mostrando beneficios concretos en eficiencia operativa, innovación, inclusión social y desempeño ambiental:
        
        
    .row(data-aos="fade-left")
      .tarjeta.p-4.bg02
        .tarjeta--blanca.p-4
          .tarjeta.p-4
            PasosB.color-primario
              .row(titulo="Agroindustria").justify-content-center.align-items-center
                .col-12.col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
                  h4 Agroindustria
                  p Promueve el uso de insumos orgánicos, el aprovechamiento de residuos agrícolas mediante compostaje y la inclusión de comunidades rurales y vulnerables en la cadena productiva
                .col-12.col-lg-5.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen Decorativa').mb-3.mb-lg-0
              .row(titulo="Textil y moda	").justify-content-center.align-items-center
                .col-12.col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
                  h4 Textil y moda	
                  p Impulsa el uso eficiente del agua, materiales reciclados o biodegradables y la implementación de programas de moda circular para prolongar la vida útil de las prendas.
                .col-12.col-lg-5.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img18.png', alt='Imagen Decorativa').mb-3.mb-lg-0
              .row(titulo="Transporte y logística").justify-content-center.align-items-center
                .col-12.col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
                  h4 Transporte y logística	
                  p Optimiza rutas con herramientas digitales, incorpora vehículos eléctricos o híbridos y digitaliza procesos para reducir emisiones y consumo de papel.
                .col-12.col-lg-5.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen Decorativa').mb-3.mb-lg-0

              .row(titulo="<em>Retail</em> (comercio al por menor)").justify-content-center.align-items-center
                .col-12.col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
                  h4
                    i Retail 
                    | (comercio al por menor)
                  p Sustituye plásticos por materiales sostenibles, fomenta la certificación ambiental de proveedores y prioriza compras locales para fortalecer economías regionales.
                .col-12.col-lg-5.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img20.png', alt='Imagen Decorativa').mb-3.mb-lg-0

              .row(titulo="Tecnología").justify-content-center.align-items-center
                .col-12.col-lg-5.mb-4.mb-md-0.order-2.order-lg-1
                  h4 Tecnología
                  p Mejora la eficiencia energética, gestiona adecuadamente los residuos electrónicos y desarrolla sistemas de trazabilidad para asegurar prácticas responsables en la cadena de suministro.
                .col-12.col-lg-5.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen Decorativa').mb-3.mb-lg-0


                      

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
