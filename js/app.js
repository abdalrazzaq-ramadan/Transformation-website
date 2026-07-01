const boxContent = document.querySelectorAll(".box .content p");
const box = document.querySelectorAll(".QA .box");
const hidden = document.querySelector(".content-hidden")
const btn = document.querySelectorAll(".QA .box button")
console.log(box);

box.forEach((el) => {
  el.onclick = () => {
    el.querySelector(".content p").classList.toggle("content-hidden");
    document.querySelector(".QA .box button").classList.toggle("fa-minus");
    document.querySelector(".QA .box button").classList.toggle("fa-plus");
  };
});

/** border nav  */
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-link")

links.forEach(link => {
  const linkPage = link.pathname.split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("border")
  }
})

console.log(currentPage);


// console.log(window.location.href);


/* Plans render */

const hostingPlans = [
  {
    name: "خطة التقدم ",
    price: "420"
  },

  {
    name: "خطة التغيير ",
    price: "980"
  },

  {
    name: "خطة الابتكار ",
    price: "1250"
  },

  {
    name: "خطة التحول ",
    price: "2000"
  }
]

const designPlans = [
  {
    name: "موقع أساسي",
    price: "1500"
  },

  {
    name: "موقع متكامل",
    price: "4500"
  },

  {
    name: "موقع احترافي",
    price: "9899"
  },

]

window.onload = () => {
  renderHostingPlans()
  plansContainer.classList.add("grid-4");
}

const plansContainer = document.querySelector(".plans-wrapper")
const designBtn = document.querySelector(".plans .btns .D")
const hostBtn = document.querySelector(".plans .btns .H")

designBtn.onclick = (e) => {
  e.preventDefault();
  plansContainer.classList.remove("grid-4")
  plansContainer.classList.add("grid-3");
  renderDesignPlans();
}

hostBtn.onclick = (e) => {
  e.preventDefault();
  plansContainer.classList.add("grid-4");
  renderHostingPlans();
}

function renderHostingPlans() {
  plansContainer.innerHTML = "";

  hostingPlans.forEach((plan) => {
    plansContainer.innerHTML += `
    <div class="plan">
                        <div class="hover-place">
                            <h4>${plan.name}</h4>
                            <b>${plan.price}</b>
                            <span>ريال/سنويا</span>
                            <p>حزمة اقتصادية مثالية للمشاريع الصغيرة</p>
                            <div class="plan-info">
                                <div>
                                    <p>الرام العشوائي</p>
                                    <b>500mb</b>
                                </div>
                                <div>
                                    <p>الهارد ديسك</p>
                                    <b>unlimited</b>
                                </div>
                                <div>
                                    <p>الترافيك</p>
                                    <b>unlimited</b>
                                </div>
                                <div>
                                    <p>المعالج</p>
                                    <b>MHZ1000</b>
                                </div>
                                <div>
                                    <p>عدد الملفات </p>
                                    <b>100000</b>
                                </div>
                                <div>
                                    <p>عدد الاتصالات في اللحظة</p>
                                    <b>100</b>
                                </div>
                                <div>
                                    <p>عدد الايميلات </p>
                                    <b>غير محدد</b>
                                </div>
                                <div>
                                    <p>عدد الايميلات </p>
                                    <b>غير محدد</b>
                                </div>
                                <div>
                                    <p>عدد قواعد البيانات</p>
                                    <b>1</b>
                                </div>
                                <div>
                                    <p>شهادة ssl</p>
                                    <b>غير متوفر</b>
                                </div>
                                <div>
                                    <p>access ssl</p>
                                    <b>غير متوفر</b>
                                </div>
                                <div>
                                    <p>دعم فني 24 ساعة</p>
                                    <b>مجانا</b>
                                </div>
                            </div><!--./palan-info-->
                            <div class="btn">
                                <a href="">الاشتراك الان</a>
                            </div><!--./btn-->
                        </div><!--./hover-place-->
                    </div><!--./plan-->
`
  })
}

// renderHostingPlans();

function renderDesignPlans() {
  plansContainer.innerHTML = "";

  designPlans.forEach((plan) => {
    plansContainer.innerHTML += `
      <div class="plan d-plans">
                            <div class="hover-place">
                                <h4>${plan.name}</h4>
                                <b>${plan.price}</b>
                                <span>ريال/سنويا</span>
                                <p>كل شركة تحتاج الى موقع , هذه الباقة لموقع تعريفي في صفحة واحدة</p>
                                <div class="plan-info">
                                    <div>
                                        <p>الرام العشوائي</p>
                                    </div>
                                    <div>
                                        <p>الهارد ديسك</p>

                                    </div>
                                    <div>
                                        <p>الترافيك</p>

                                    </div>
                                    <div>
                                        <p>المعالج</p>

                                    </div>
                                    <div>
                                        <p>عدد الملفات </p>

                                    </div>
                                    <div>
                                        <p>عدد الاتصالات في اللحظة</p>

                                    </div>
                                    <div>
                                        <p>عدد الايميلات </p>

                                    </div>
                                    <div>
                                        <p>عدد الايميلات </p>

                                    </div>
                                    <div>
                                        <p>عدد قواعد البيانات</p>

                                    </div>

                                </div><!--./palan-info-->
                                <div class="btn">
                                    <a href="">الاشتراك الان</a>
                                </div><!--./btn-->
                            </div><!--./hover-place-->
      </div><!--./plan-->
    `
  })
}

// renderDesignPlans()



/* Nav scroll */

const nav = document.querySelector(".home nav");

window.onscroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 135) {
    nav.classList.add("hide")
  } else {
    nav.classList.remove("hide")
  }
}




/* side menue */

