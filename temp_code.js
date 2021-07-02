window.onload = function(){
   const disclaimer = document.getElementById('disclaimer')
   const main = document.getElementById('main')
   const footer = document.getElementById('footer')
   const title = document.getElementById('title')
   const lowerLogo = document.getElementById('lowerLogo')
   const centerLogo = document.getElementById('centerLogo')
   const hoverOverContainer = document.getElementById('hoverOverContainer')
   const hoverOver = document.getElementById('hoverOver')
   const alerts = document.getElementById('alerts')
   const schoolName = document.getElementById('schoolName')
   const projectName = document.getElementById('projectName')
   const graduationHatBackground = document.getElementById('graduationHatBackground')
   const graduationHat = document.getElementById('graduationHat')
   const handshakeBackground = document.getElementById('handshakeBackground')
   const handshake = document.getElementById('handshake')
   const bookBackground = document.getElementById('bookBackground')
   const book = document.getElementById('book')
   const centerLogoDetails = document.getElementById('centerLogoDetails')
   const centerLogoDetailsLine = document.getElementById('centerLogoDetailsLine')
   const graduationHatSelection = document.getElementById('graduationHatSelection')
   const graduationHatLine = document.getElementById('graduationHatLine')
   const handShakeSelection = document.getElementById('handShakeSelection')
   const handShakeLine = document.getElementById('handShakeLine')
   const bookSelection = document.getElementById('bookSelection')
   const bookLine = document.getElementById('bookLine')

   hoverOver.onclick = function(){
      const hoverOverState = hoverOver.classList.value.split(' ')[1]
      alerts.classList.add('show')
      alerts.innerHTML = 'Error: hover over is not ready'
      setTimeout(() => {
         alerts.classList.remove('show')
      }, 10000);

      if(hoverOverState === 'enable'){
         hoverOver.classList.remove('enable')
         hoverOver.classList.add('disable')
         hoverOver.innerHTML = 'Enable hover over'
         centerLogo.classList.remove('hoverOverActive')
         lowerLogo.classList.remove('hoverOverActive')

      }else if(hoverOverState === 'disable'){
         hoverOver.classList.remove('disable')
         hoverOver.classList.add('enable')
         hoverOver.innerHTML = 'Disable hover over'
         centerLogo.classList.add('hoverOverActive')
         lowerLogo.classList.add('hoverOverActive')
      }
   }

   const titleAnimation = () => {
      const englishTextTemplete = 'English society logo'
      const englishTextIndex = englishTextTemplete.split('')
      let englishText = ''
      let count = 0

      console.log(englishTextIndex)

      const titleAnimate = () => {
         if(count < 20){
            englishText += englishTextIndex[count]

            setTimeout(() => {
               title.innerHTML = englishText
               console.log(englishText)
               count++
               titleAnimate()
            }, 40);

         }else if(englishTextIndex[count] === ' '){
            count++
            titleAnimate()

         }
      }

      titleAnimate()
   }

   const switchModal = () => {
      const classes = title.classList.value.split(' ')

      if(classes[1] === 'show'){
         return
      }

      disclaimer.classList.remove('show')
      setTimeout(() => {
         main.classList.add('show')

         setTimeout(() => {
            footer.classList.add('show')

            setTimeout(() => {
               title.classList.add('show')

               setTimeout(() => {
                  lowerLogo.classList.add('show')

                  setTimeout(() => {
                     titleAnimation()
                     centerLogo.classList.add('show')
                     hoverOverContainer.classList.add('show')

                     setTimeout(() => {
                        schoolName.classList.add('show')
                        projectName.classList.add('show')
                        graduationHatBackground.classList.add('show')
                        handshakeBackground.classList.add('show')
                        bookBackground.classList.add('show')

                        setTimeout(() => {
                           graduationHat.classList.add('show')
                           handshake.classList.add('show')
                           book.classList.add('show')

                           setTimeout(() => {
                              centerLogoDetailsLine.classList.add('show')
                              graduationHatLine.classList.add('show')
                              handShakeLine.classList.add('show')
                              bookLine.classList.add('show')

                              setTimeout(() => {
                                 centerLogoDetails.classList.add('show')
                                 graduationHatSelection.classList.add('show')
                                 handShakeSelection.classList.add('show')
                                 bookSelection.classList.add('show')

                              }, 500);
                           }, 200);
                        }, 100);
                     }, 200);
                  }, 90);
               }, 90);
            }, 300);
         }, 20);
      }, 100);
   }

   window.onkeydown = function(){
      switchModal()
   }

   window.onscroll = function(){
      switchModal()
   }

   window.onclick = function(){
      switchModal()
   }
}