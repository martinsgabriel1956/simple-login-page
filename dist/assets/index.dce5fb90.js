const d=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};d();const a=t=>`
    <input type="text" placeholder=${t} />
  `;const u=(t,n)=>`
    <div class="checkbox-container" >
      <input type="checkbox" id=${t} name=${t}  />
      <label for=${t}>${n}</label>
    </div>
  `;const g=t=>`
    <button class="login-btn">${t}</button>
  `;const m="<h1>Sign in</h1>",p="<p>Sign in and start managing your candidates!</p>",h='<a href="#">Forgot your password?</p>',f=()=>`
    <section class="container">
      ${m}
      ${p}

      <div class="input-container">
        ${a("Username")}
        ${a("Password")}
      </div>
      <div class="settings-input-container">
        ${u("remember_me","Remember me")}
        ${h}
      </div>
      ${g("Login")}
    </section>
    </section>
  `;const b=()=>`
    <button class="switch-theme-btn">
      <img src="../../../public/assets/Light Mode-Dark Mode.svg" width="50px" alt="switch" />
    </button>
  `,y=()=>{const t=document.querySelector("#app"),n=document.querySelector(".switch-theme-btn"),r=document.querySelector("img.bg"),o=document.querySelector("a");t.classList.add("light-theme"),r.src="./assets/bg-light.svg",n.addEventListener("click",()=>{t.classList.toggle("light-theme"),t.classList.toggle("dark-theme"),t.classList.contains("light-theme")?(r.src="./assets/bg-light.svg",o.style.color="#000"):t.classList.contains("dark-theme")&&(r.src="./assets/bg-dark.svg",o.style.color="#20DF7F")})},i=document.querySelector("#app"),l=document.createElement("img");l.classList.add("bg");i.insertAdjacentHTML("beforeend",f());i.insertAdjacentElement("beforeend",l);i.insertAdjacentHTML("beforeend",b());y();
