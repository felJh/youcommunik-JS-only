// C O L O R S 

let bleu = '#334C5D'
let gris = '#EBE3D7'
let footerGris = '#393B3A'

// H E A D E R

class Header {
    constructor(img) {
        let header = document.createElement('header')
        document.body.appendChild(header)
        header.style.backgroundColor = 'black'
        header.style.display = 'flex'
        header.style.alignItems = 'center'
        header.style.justifyContent = 'space-between'
        header.style.padding = '.5rem 0 '

        let div = document.createElement('div')
        header.appendChild(div)
        div.style.backgroundImage = img
        div.style.backgroundPosition = 'center'
        div.style.backgroundRepeat = 'no-repeat'
        div.style.backgroundSize = 'contain'
        div.style.height = '2.5rem'
        div.style.width = '22%'

        let ul = document.createElement('ul')
        header.appendChild(ul)
        ul.style.display = 'flex'
        ul.style.alignItems = 'center'
        ul.style.justifyContent = 'space-evenly'
        ul.style.width = '50%'

        class HeaderListItem {
            constructor(img, txt) {
                let li = document.createElement('li')
                li.style.display = 'flex'
                li.style.flexDirection = 'column'
                li.style.alignItems = 'center'

                let div = document.createElement('div')
                li.appendChild(div)
                div.style.backgroundImage = img
                div.style.backgroundPosition = 'center'
                div.style.borderRadius = '50%'
                div.style.height = '3.2rem'
                div.style.width = '3.2rem'

                let a = document.createElement('a')
                li.appendChild(a)
                a.style.display = 'block'
                a.style.color = 'white'
                a.style.fontSize = '9px'
                a.style.paddingTop = '.5rem'
                a.textContent = txt

                ul.appendChild(li)
            }
        }
        let home = new HeaderListItem("url('./public/img/home-icon.png')", 'HOME')
        let packages = new HeaderListItem("url('./public/img/packages-icon.png')", 'PACKAGES')
        let outils = new HeaderListItem("url('./public/img/outils-icon.png')", 'OUTILS')
        let projets = new HeaderListItem("url('./public/img/projets-icon.png')", 'PROJETS')
        let temoignages = new HeaderListItem("url('./public/img/temoignages-icon.png')", 'TEMOIGNAGES')
        let contact = new HeaderListItem("url('./public/img/contact-icon.png')", 'CONTACT')


    }
}

// M A I N

let main = document.createElement('main')

// P A C K A G E S


class Package {
    constructor(img) {
        let section = document.createElement('section')
        section.style.backgroundColor = bleu
        section.style.display = 'flex'
        section.style.justifyContent = 'space-around'
        section.style.alignItems = 'center'
        section.style.padding = '2rem 4rem '

        let div1 = document.createElement('div')
        section.appendChild(div1)
        div1.style.backgroundImage = img
        div1.style.backgroundRepeat = 'no-repeat'
        div1.style.backgroundSize = 'contain'
        div1.style.width = '9rem'
        div1.style.height = '9rem'

        let div2 = document.createElement('div')
        section.appendChild(div2)
        div2.style.display = 'flex'
        div2.style.lineHeight = '50px'
        div2.style.width = '60%'
        div2.style.flexDirection = 'column'
        div2.style.alignItems = 'flex-start'
        div2.style.justifyContent = 'space-around'

        let h2 = document.createElement('h2')
        div2.appendChild(h2)
        h2.style.color = 'white'
        h2.style.fontSize = '40px'
        h2.textContent = 'À chaque étape son pack'


        let h3 = document.createElement('h3')
        div2.appendChild(h3)
        h3.style.color = 'white'
        h3.style.fontSize = '20px'
        h3.textContent = 'naître, grandir et prospérer.'

        main.appendChild(section)
    }
}

// S E C T I O N   A (bg white)
class SectionA {
    constructor(txtH2, img, txtP1, txtP2) {
        let section = document.createElement('section')
        section.style.padding = '0 7rem 1rem 7rem'

        let h2 = document.createElement('h2')
        section.appendChild(h2)
        h2.textContent = txtH2
        h2.style.fontSize = '40px'
        h2.style.color = 'white'
        h2.style.margin = '3rem auto'
        h2.style.width = '37%'
        h2.style.padding = '.8rem 2rem'
        h2.style.backgroundColor = bleu
        h2.style.textAlign = 'center'

        let div = document.createElement('div')
        section.appendChild(div)
        div.style.display = 'flex'
        div.style.alignItems = 'flex-start'
        div.style.justifyContent = 'center'


        let imgDiv = document.createElement('div')
        div.appendChild(imgDiv)
        imgDiv.style.backgroundImage = img
        imgDiv.style.backgroundPosition = 'center 95%'
        imgDiv.style.margin = '0 auto 0 0'
        imgDiv.style.width = '13rem'
        imgDiv.style.height = '13rem'
        imgDiv.style.borderRadius = '50%'

        let txtDiv = document.createElement('div')
        div.appendChild(txtDiv)
        txtDiv.style.width = '55%'

        let p1 = document.createElement('p')
        txtDiv.appendChild(p1)
        p1.textContent = txtP1

        let br = document.createElement('br')
        txtDiv.appendChild(br)

        let p2 = document.createElement('p')
        txtDiv.appendChild(p2)
        p2.textContent = txtP2

        main.appendChild(section)
    }
}

// S E C T I O N   B  (bg gris)

class SectionB {
    constructor(img1, txt1, img2, txt2, img3, txt3, img4, txt4, img5, txt5) {
        let section = document.createElement('section')
        section.style.backgroundColor = gris
        section.style.padding = '2rem 5rem'

        let ul = document.createElement('ul')
        section.appendChild(ul)
        ul.style.display = 'flex'
        ul.style.justifyContent = 'center'
        ul.style.flexWrap = 'wrap'

        class ListItem {
            constructor(img, txt) {
                let li = document.createElement('li')
                ul.appendChild(li)
                li.style.height = '7rem'
                li.style.display = 'flex'
                li.style.flexDirection = 'column'
                li.style.justifyContent = 'space-between'
                li.style.alignItems = 'center'
                li.style.width = '20vw'

                let div = document.createElement('div')
                li.appendChild(div)
                div.style.backgroundImage = img
                div.style.backgroundSize = 'cover'
                div.style.width = '5rem'
                div.style.height = '5rem'
                div.style.borderRadius = '50%'

                let p = document.createElement('p')
                li.appendChild(p)
                p.textContent = txt
            }
        }
        let li1 = new ListItem(img1, txt1)
        let li2 = new ListItem(img2, txt2)
        let li3 = new ListItem(img3, txt3)
        let li4 = new ListItem(img4, txt4)
        if (img5 !== '' && txt5 !== '') {
            let li5 = new ListItem(img5, txt5)
        }


        main.appendChild(section)
    }

}

// F O O T E R

class Footer {
    constructor() {
        let footer = document.createElement('footer')
        document.body.appendChild(footer)
        footer.style.position = 'relative'
        footer.style.backgroundColor = footerGris
        footer.style.padding = '3rem 5rem 5rem'
        footer.style.display = 'grid'
        footer.style.gridTemplateColumns = '1fr 1fr .5fr'

        class FootSection {
            constructor(txt, url1, url2, url3) {
                let div = document.createElement('div')
                footer.appendChild(div)
                div.style.display = 'flex'
                div.style.height = '6rem'
                div.style.flexDirection = 'column'
                div.style.justifyContent = 'space-between'

                let p = document.createElement('p')
                div.appendChild(p)
                p.textContent = txt
                p.style.color = 'white'

                let imgGroup = document.createElement('div')
                div.appendChild(imgGroup)
                imgGroup.style.display = 'flex'
                imgGroup.style.width = '100%'

                class Img {
                    constructor(url) {
                        let img = document.createElement('div')
                        imgGroup.appendChild(img)
                        img.style.backgroundImage = url
                        img.style.backgroundSize = 'contain'
                        img.style.height = '3.2rem'
                        img.style.width =  '3.2rem'
                        img.style.marginRight = '1rem'
                    }
                }
                let img1 = new Img(url1)
                let img2 = new Img(url2)
                if (url3 !== '') {
                    let img3 = new Img(url3)
                }
            }
        }
        let section1 = new FootSection(
            'Packs',
            "url('./public/img/icon-eclosion.png')",
            "url('./public/img/icon-evolution.png')",
            "url('./public/img/icon-envole.png')"
        )
        let section2 = new FootSection(
            'Outils',
            "url('./public/img/identite-graphique.png')",
            "url('./public/img/icon-campagne-facebook.png')",
            "url('./public/img/print.png')"
        )
        let section3 = new FootSection(
            'Social media',
            "url('./public/img/social-f.png')",
            "url('./public/img/google-plus.png')",
            ''
        )
        let p = document.createElement('p')
        footer.appendChild(p)
        p.textContent = 'C.G.V.'
        p.style.textAlign = 'right'
        p.style.position = 'absolute'
        p.style.right = '1rem'
        p.style.bottom = '1rem'
        p.style.color = 'white'
    }
}

// création du site:

let header = new Header("url('./public/img/logo-horizontal-fond-noir-couleur.png')")

document.body.appendChild(main)

let package = new Package("url('./public/img/packages.png")

let section1 = new SectionA(
    'Éclosion',
    "url('./public/img/icon-eclosion.png')",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam',
    'Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)

let section2 = new SectionB(
    "url('./public/img/Logo-logo.png')",
    'Logo',
    "url('./public/img/icon-charte-graphic.png')",
    'Charte graphique',
    "url('./public/img/site-single-page.png')",
    'Site single page',
    "url('./public/img/carte-visite.png')",
    'Carte de visite',
    '',
    ''
)

let section3 = new SectionA(
    'Évolution',
    "url('./public/img/icon-evolution.png')",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam',
    'Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)
let section4 = new SectionB(
    "url('./public/img/Logo-logo.png')",
    'Logo',
    "url('./public/img/icon-charte-graphic.png')",
    'Charte graphique',
    "url('./public/img/site-vitrine.png')",
    'Site vitrine',
    "url('./public/img/site-single-page.png')",
    'Réseaux sociaux',
    "url('./public/img/carte-visite.png')",
    'Carte de visite',
)

let section5 = new SectionA(
    'Envol',
    "url('./public/img/icon-envole.png')",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam',
    'Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)

let section6 = new SectionB(
    "url('./public/img/icon-analyse-flux-web.png')",
    'Analyse du flux web',
    "url('./public/img/icon-campagne-facebook.png')",
    'Campagne facebook',
    "url('./public/img/temoignages-icon.png')",
    'Campagne Adwords',
    "url('./public/img/icon-campagne-e-mailing.png')",
    'Campagne Emailing',
    '',
    ''
)

let foot = new Footer()