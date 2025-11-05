<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- Col3 y Col9
    .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
      .col-8.col-md-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/sintesis01.png', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-9
        p El componente formativo Diseño del plan de la cadena de suministro sostenible, permite comprender los principios, procesos y herramientas que integran la sostenibilidad en la gestión de las cadenas de suministro, desde la planeación hasta la implementación práctica. Inicia con el estudio de los objetivos sostenibles y su relación con los criterios ambientales, sociales y económicos, orientando decisiones responsables en las organizaciones. Luego, profundiza en las estrategias sostenibles, destacando su aporte a la optimización de recursos, reducción de impactos y creación de valor compartido.
        p También aborda las metodologías y herramientas para estructurar planes logísticos sostenibles, considerando factores, recursos e indicadores que facilitan la evaluación y mejora continua. La documentación incluye buenas prácticas en ecodiseño, logística inversa, digitalización verde y alianzas sostenibles, fortaleciendo una visión sistémica e innovadora .


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis 

</template>

<script>
export default {
  name: 'Sintesis',
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
