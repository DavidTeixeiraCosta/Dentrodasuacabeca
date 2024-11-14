const data=[
{title:"TRANSTORNO DE ANSIEDADE GENERALIZADA (TAG)",src:"caso-2.html", img:"../images/Capturadetela2024-10-10223538.png"},
{title:"TRANSTORNO DISMÓRFICO CORPORAL (TDC)",src:"caso-1.html", img:"../images/im1.jpg"},
{title:"TRANSTORNO OBSESSIVO COMPULSIVO (TOC)",src:"caso3.html" , img:"../images/im2.jpg",},
{title:"TRANSTORNO DE ESTRESSE PÓS-TRAUMÁTICO (TEPT)",src:"post-2.html", img:"../images/im3.jpg"},
{title:"TRANSTORNO DE PERSONALIDADE BORDERLINE (TPB)",src:"post-3.html", img:"../images/im4.jpg"},
{title:"DOENÇA DE ALZHEIMER (DA)",src:"post-4.html",img:"../images/im5.jpg"},
{title:"TRANSTORNO DE DÉFICIT DE ATENÇÃO E HIPERATIVIDADE (TDAH)",src:"post-5.html",img:"../images/im6.jpg"},
{title:"EPILEPSIA",src:"post-6.html",img:"../images/im7.jpg"},
{title:"PARKINSON ",src:"post-7.html",img:"../images/im8.jpg"},
{title:"DOENÇA DE HUNTINGTON",src:"post-8.html",img:"../images/im9.jpg"},
{title:"VITILIGO",src:"post-9.html",img:"../images/im10.jpg"},
{title:"PSORÍASE FACIAL",src:"post-10.html",img:"../images/im12.jpg"},
{title:"ROSÁCEA",src:"post-11.html",img:"../images/im13.jpg"},
{title:"MELASMA ",src:"post-12.html",img:"../images/im14.jpg"},
{title:"ACNE",src:"post-13.html",img:"../images/im15.jpg"},

];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
cardContainer.innerHTML = "";
data.forEach(e => {
    cardContainer.innerHTML +=
    `<div class="u-container-layout u-similar-container u-container-layout-1"><!--blog_post_header-->
                <h2 class="u-align-center u-blog-control u-custom-font u-font-playfair-display u-text u-text-2">
                  <a class="u-post-header-link" href="../blog/${e.src}">${e.title}</a>
                </h2><!--/blog_post_header--><!--blog_post_image-->
                <a class="u-post-header-link" href="../blog/${e.src}"><img alt="" class="u7
                ,-blog-control u-expanded-width u-image u-image-contain u-image-default u-image-1" src="../images/${e.img}" data-image-width="1920" data-image-height="1080"></a><!--/blog_post_image--><!--blog_post_metadata-->
                <div class="u-blog-control u-metadata u-metadata-1"><!--blog_post_metadata_date-->
                  <span class="u-meta-date u-meta-icon">28 de out. de 2024</span><!--/blog_post_metadata_date-->
                </div><!--/blog_post_metadata--><!--blog_post_content-->
                <!--/blog_post_content--><!--blog_post_readmore-->
                <a href="../blog/${e.src}" class="u-align-center u-blog-control u-btn u-button-style u-btn-1"><!--blog_post_readmore_content--><!--options_json--><!--{"content":"Leia agora​","defaultValue":"Ler Mais"}--><!--/options_json-->Leia agora <!--/blog_post_readmore_content--></a><!--/blog_post_readmore-->
              </div>`
})}

searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);})

window.addEventListener("load",  displayData.bind(null,data))