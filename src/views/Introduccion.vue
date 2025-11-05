<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    //- Col Imagen y Texto
    .bloque-texto-g.bg-color-terciario-t20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo Diseño del plan de la cadena de suministro sosteniblev ofrece al aprendiz herramientas técnicas y prácticas para abordar la planificación e integración de cadenas de suministro con enfoque sostenible. A partir del conocimiento de conceptos, metodologías y modelos de gestión verde, se fortalecen competencias para diseñar, implementar y evaluar estrategias que optimicen recursos, respeten el medio ambiente y generen valor social y económico.

    //- Col1 y Col11
    .container.mb-5
      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-5.col-lg-1.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/intro/img02.svg', alt='imagen decorativa')
        .col-12.col-md-12.col-lg-11.mb-4.mb-lg-0
          p.mb-0 Este componente también enfatiza en la identificación de objetivos sostenibles, prioridades competitivas y buenas prácticas de planificación, con un enfoque en la normativa nacional e internacional y la responsabilidad social corporativa. Además, promueve la aplicación de criterios ambientales, sociales y económicos en decisiones estratégicas. Así, se contribuye a la formación de técnicos y tecnólogos capaces de liderar cadenas de valor inclusivas y sostenibles.


    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
