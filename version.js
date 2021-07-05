window.onload = function(){
   const updateConfirmButton = document.getElementById('updateConfirmButton')
   const updateBlock = document.getElementById('updateBlock')
   const version = document.getElementById('version')

   if(version.classList.value.split(' ')[1] < 2){
      updateBlock.classList.add('show')
      updateConfirmButton.setAttribute('href', "https://github.com/JoshuaLimKarMin/English-society-logo/archive/refs/heads/current.zip")
   }

   console.log(document.getElementsByTagName('script')[0])
   main()
} 