let element = document.getElementsByClassName('element')
let resultClick = document.querySelector('.resultClick ')
let resultClickText = document.querySelector('.resultClickText ')
let resultMouse = document.querySelector('.resultMouse ')
let close = document.querySelector('.close')
let container = document.querySelector('.container')
let resultExample = document.querySelector('.resultExample')

//Json veri yapısı çekildi
fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
    .then(response => response.json())
    .then(veri => {

        //ilk 57 element için yapıldı
        for (let i = 0; i < 57; i++) {
            element[i].innerHTML = `<div class="num">${veri.elements[i].number}</div> ${veri.elements[i].symbol}`

            //Elemente tıklandığında ayrıntıların gösterilmesi
            element[i].addEventListener('click', function() {
                resultClick.style.display = 'flex'
                container.classList.add('bgFilter')
                resultExample.style.display = 'none'
                resultClickText.innerHTML = `
                    <div class="clickAtomNum">${veri.elements[i].number}</div>
                    <div class="clickElementName">${veri.elements[i].name}</div>
                    <div class="clickElementSymbol">${veri.elements[i].symbol}</div>
                    <img src="${veri.elements[i].image.url}" alt="Element"
                    class="elementImage">
                    <p class="elementSummary">${veri.elements[i].summary}</p>
                    <a href="${veri.elements[i].source}" class="elementSource" target="_blank">${veri.elements[i].source}</a>
                `
            }) 
            //Tıklayınca açılan pencerenin kapatılması
            close.addEventListener('click',function() {
                resultClick.style.display = 'none'
                container.classList.remove('bgFilter')
                resultExample.style.display = 'flex'
            })

            //Mouse ile üzerine gelindiğinde element üzerine gelindiğinde özelliklerin gösterilmesi
            element[i].addEventListener('mousemove', function () {
                resultMouse.style.display = 'flex'
                element[i].style.backgroundColor = '#f34242'
                resultMouse.innerHTML = `
                <div class="atomNum">${veri.elements[i].number}</div>
                <div class="atomicMass">${veri.elements[i].atomic_mass}</div>
                <div class="elementName">${veri.elements[i].name}</div>
                <div class="elementSymbol">${veri.elements[i].symbol}</div>
                <div class="elementPhase">${veri.elements[i].phase}</div>
                `
            })
            element[i].addEventListener('mouseout', function () {
                resultMouse.style.display = 'none'
                color1()
            })

            color1()
            function color1() {
                //Elementlerin türlerine göre arka plan renklendirmesi
                if (veri.elements[i].category == 'diatomic nonmetal') {
                    element[i].style.backgroundColor = 'rgb(140,237,140)'
                }
                if (veri.elements[i].category == 'noble gas') {
                    element[i].style.backgroundColor = 'rgb(229,189,229)'
                }
                if (veri.elements[i].category == 'alkali metal') {
                    element[i].style.backgroundColor = 'rgb(234,206,93)'
                }
                if (veri.elements[i].category == 'alkaline earth metal') {
                    element[i].style.backgroundColor = 'rgb(241,241,101)'
                }
                if (veri.elements[i].category == 'metalloid') {
                    element[i].style.backgroundColor = 'rgb(158,229,212)'
                }
                if (veri.elements[i].category == 'polyatomic nonmetal') {
                    element[i].style.backgroundColor = 'rgb(140,237,140)'
                }
                if (veri.elements[i].category == 'transition metal') {
                    element[i].style.backgroundColor = 'rgb(250,197,183)'
                }
                if (veri.elements[i].category == 'post-transition metal') {
                    element[i].style.backgroundColor = 'rgb(172,223,236)'
                }
                if (veri.elements[i].category == 'lanthanide') {
                    element[i].style.backgroundColor = 'rgb(232,209,156)'
                }
            }
        }

        //71-88 elementleri arası
        for (let i = 71; i < 89; i++) {
            element[i - 14].innerHTML = `<div class="num">${veri.elements[i].number}</div> ${veri.elements[i].symbol}`

            //Elemente tıklandığında ayrıntıların gösterilmesi
            element[i-14].addEventListener('click', function() {
                resultClick.style.display = 'flex'
                container.classList.add('bgFilter')
                resultExample.style.display = 'none'
                resultClickText.innerHTML = `
                    <div class="clickAtomNum">${veri.elements[i].number}</div>
                    <div class="clickElementName">${veri.elements[i].name}</div>
                    <div class="clickElementSymbol">${veri.elements[i].symbol}</div>
                    <img src="${veri.elements[i].image.url}" alt="Element"
                    class="elementImage">
                    <p class="elementSummary">${veri.elements[i].summary}</p>
                    <a href="${veri.elements[i].source}" class="elementSource" target="_blank">${veri.elements[i].source}</a>
                `
            }) 
            //Tıklayınca açılan pencerenin kapatılması
            close.addEventListener('click',function() {
                resultClick.style.display = 'none'
                container.classList.remove('bgFilter')
                resultExample.style.display = 'flex'
            })

            //Mouse ile üzerine gelindiğinde element üzerine gelindiğinde özelliklerin gösterilmesi
            element[i - 14].addEventListener('mousemove', function () {
                resultMouse.style.display = 'flex'
                element[i - 14].style.backgroundColor = '#f34242'
                resultMouse.innerHTML = `
                <div class="atomNum">${veri.elements[i].number}</div>
                <div class="atomicMass">${veri.elements[i].atomic_mass}</div>
                <div class="elementName">${veri.elements[i].name}</div>
                <div class="elementSymbol">${veri.elements[i].symbol}</div>
                <div class="elementPhase">${veri.elements[i].phase}</div>
                `
            })
            element[i - 14].addEventListener('mouseout', function () {
                resultMouse.style.display = 'none'
                color2()
            })

            color2()
            function color2() {
                //Elementlerin türlerine göre arka plan renklendirmesi
                if (veri.elements[i].category == 'transition metal') {
                    element[i - 14].style.backgroundColor = 'rgb(250,197,183)'
                }
                if (veri.elements[i].category == 'post-transition metal') {
                    element[i - 14].style.backgroundColor = 'rgb(172,223,236)'
                }
                if (veri.elements[i].category == 'metalloid') {
                    element[i - 14].style.backgroundColor = 'rgb(158,229,212)'
                }
                if (veri.elements[i].category == 'noble gas') {
                    element[i - 14].style.backgroundColor = 'rgb(229,189,229)'
                }
                if (veri.elements[i].category == 'alkali metal') {
                    element[i - 14].style.backgroundColor = 'rgb(234,206,93)'
                }
                if (veri.elements[i].category == 'alkaline earth metal') {
                    element[i - 14].style.backgroundColor = 'rgb(241,241,101)'
                }
                if (veri.elements[i].category == 'actinide') {
                    element[i - 14].style.backgroundColor = 'rgb(245,204,218)'
                }
            }
        }

        //103-118 elementleri arası
        for (let i = 103; i < 118; i++) {
            element[i - 28].innerHTML = `<div class="num">${veri.elements[i].number}</div> ${veri.elements[i].symbol}`

            //Elemente tıklandığında ayrıntıların gösterilmesi
            element[i-28].addEventListener('click', function() {
                resultClick.style.display = 'flex'
                container.classList.add('bgFilter')
                resultExample.style.display = 'none'
                resultClickText.innerHTML = `
                    <div class="clickAtomNum">${veri.elements[i].number}</div>
                    <div class="clickElementName">${veri.elements[i].name}</div>
                    <div class="clickElementSymbol">${veri.elements[i].symbol}</div>
                    <img src="${veri.elements[i].image.url}" alt="Element"
                    class="elementImage">
                    <p class="elementSummary">${veri.elements[i].summary}</p>
                    <a href="${veri.elements[i].source}" class="elementSource" target="_blank">${veri.elements[i].source}</a>
                `
            }) 
            //Tıklayınca açılan pencerenin kapatılması
            close.addEventListener('click',function() {
                resultClick.style.display = 'none'
                container.classList.remove('bgFilter')
                resultExample.style.display = 'flex'
            })

            //Mouse ile üzerine gelindiğinde element üzerine gelindiğinde özelliklerin gösterilmesi
            element[i - 28].addEventListener('mousemove', function () {
                resultMouse.style.display = 'flex'
                element[i - 28].style.backgroundColor = '#f34242'
                resultMouse.innerHTML = `
                <div class="atomNum">${veri.elements[i].number}</div>
                <div class="atomicMass">${veri.elements[i].atomic_mass}</div>
                <div class="elementName">${veri.elements[i].name}</div>
                <div class="elementSymbol">${veri.elements[i].symbol}</div>
                <div class="elementPhase">${veri.elements[i].phase}</div>
                `
            })
            element[i - 28].addEventListener('mouseout', function () {
                resultMouse.style.display = 'none'
                color3()
            })

            color3()
            function color3() {
                //Elementlerin türlerine göre arka plan renklendirmesi
                if (veri.elements[i].category == 'transition metal') {
                    element[i - 28].style.backgroundColor = 'rgb(250,197,150)'
                } else {
                    element[i - 28].style.backgroundColor = 'rgb(220,220,220)'
                }
                if (veri.elements[i].category == 'unknown, probably transition metal') {
                    element[i - 28].style.backgroundColor = 'rgb(220,220,220)'
                }
                if (veri.elements[i].category == 'unknown, probably post-transition metal') {
                    element[i - 28].style.backgroundColor = 'rgb(220,220,220)'
                }
            }
        }

        //57-71 elementleri arası
        for (let i = 57; i < 71; i++) {
            element[i + 33].innerHTML = `<div class="num">${veri.elements[i].number}</div> ${veri.elements[i].symbol}`

            //Elemente tıklandığında ayrıntıların gösterilmesi
            element[i+33].addEventListener('click', function() {
                resultClick.style.display = 'flex'
                container.classList.add('bgFilter')
                resultExample.style.display = 'none'
                resultClickText.innerHTML = `
                    <div class="clickAtomNum">${veri.elements[i].number}</div>
                    <div class="clickElementName">${veri.elements[i].name}</div>
                    <div class="clickElementSymbol">${veri.elements[i].symbol}</div>
                    <img src="${veri.elements[i].image.url}" alt="Element"
                    class="elementImage">
                    <p class="elementSummary">${veri.elements[i].summary}</p>
                    <a href="${veri.elements[i].source}" class="elementSource" target="_blank">${veri.elements[i].source}</a>
                `
            }) 
            //Tıklayınca açılan pencerenin kapatılması
            close.addEventListener('click',function() {
                resultClick.style.display = 'none'
                container.classList.remove('bgFilter')
                resultExample.style.display = 'flex'
            })

            //Mouse ile üzerine gelindiğinde element üzerine gelindiğinde özelliklerin gösterilmesi
            element[i + 33].addEventListener('mousemove', function () {
                resultMouse.style.display = 'flex'
                element[i + 33].style.backgroundColor = '#f34242'
                resultMouse.innerHTML = `
                <div class="atomNum">${veri.elements[i].number}</div>
                <div class="atomicMass">${veri.elements[i].atomic_mass}</div>
                <div class="elementName">${veri.elements[i].name}</div>
                <div class="elementSymbol">${veri.elements[i].symbol}</div>
                <div class="elementPhase">${veri.elements[i].phase}</div>
                `
            })
            element[i + 33].addEventListener('mouseout', function () {
                resultMouse.style.display = 'none'
                color4()
            })

            color4()
            function color4() {
                //Elementlerin türlerine göre arka plan renklendirmesi
                if (veri.elements[i].category == 'lanthanide') {
                    element[i + 33].style.backgroundColor = 'rgb(232,209,156)'
                }
            }
        }

        //89-103 elementleri arası
        for (let i = 89; i < 103; i++) {
            element[i + 15].innerHTML = `<div class="num">${veri.elements[i].number}</div> ${veri.elements[i].symbol}`

            //Elemente tıklandığında ayrıntıların gösterilmesi
            element[i+15].addEventListener('click', function() {
                resultClick.style.display = 'flex'
                container.classList.add('bgFilter')
                resultExample.style.display = 'none'
                resultClickText.innerHTML = `
                    <div class="clickAtomNum">${veri.elements[i].number}</div>
                    <div class="clickElementName">${veri.elements[i].name}</div>
                    <div class="clickElementSymbol">${veri.elements[i].symbol}</div>
                    <img src="${veri.elements[i].image.url}" alt="Element"
                    class="elementImage">
                    <p class="elementSummary">${veri.elements[i].summary}</p>
                    <a href="${veri.elements[i].source}" class="elementSource" target="_blank">${veri.elements[i].source}</a>
                `
            }) 
            //Tıklayınca açılan pencerenin kapatılması
            close.addEventListener('click',function() {
                resultClick.style.display = 'none'
                container.classList.remove('bgFilter')
                resultExample.style.display = 'flex'
            })

            //Mouse ile üzerine gelindiğinde element üzerine gelindiğinde özelliklerin gösterilmesi
            element[i + 15].addEventListener('mousemove', function () {
                resultMouse.style.display = 'flex'
                element[i + 15].style.backgroundColor = '#f34242'
                resultMouse.innerHTML = `
                <div class="atomNum">${veri.elements[i].number}</div>
                <div class="atomicMass">${veri.elements[i].atomic_mass}</div>
                <div class="elementName">${veri.elements[i].name}</div>
                <div class="elementSymbol">${veri.elements[i].symbol}</div>
                <div class="elementPhase">${veri.elements[i].phase}</div>
                `
            })
            element[i + 15].addEventListener('mouseout', function () {
                resultMouse.style.display = 'none'
                color5()
            })

            color5()
            function color5() {
                //Elementlerin türlerine göre arka plan renklendirmesi
                if (veri.elements[i].category == 'actinide') {
                    element[i + 15].style.backgroundColor = 'rgb(245,204,218)'
                }
            }
        }
    })


