import { test, expect } from '@playwright/test';

for(const width of [320,375,390,430,768,1024,1440,1920]){
 test(`Layout e imagens em ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:900});
  await page.emulateMedia({reducedMotion:'reduce'});
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading',{level:1})).toHaveText('SEU CARRO EMBOAS MÃOS.');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  const image=page.locator('.hero-image img');
  await expect(image).toBeVisible();
  expect(await image.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0)).toBe(true);
  expect(await image.evaluate((el:HTMLImageElement)=>el.currentSrc)).toContain(width<=640?'hero-mobile.webp':'hero-desktop.webp');
  for(const id of ['sobre','servicos','oficina','orcamento','contato']){
   await page.locator(`#${id}`).scrollIntoViewIfNeeded();
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
  expect(errors).toEqual([]);
 });
}
test('Serviços: conteúdo, fotografia, WhatsApp e teclado',async({page})=>{
 await page.goto('/');
 const tabs=page.getByRole('tab');
 for(let i=0;i<8;i++){
  await tabs.nth(i).click();await expect(tabs.nth(i)).toHaveAttribute('aria-selected','true');
  const panel=page.getByRole('tabpanel');
  const title=await panel.getByRole('heading').innerText();
  await expect(panel.locator('img')).toHaveAttribute('src',new RegExp(`service-${i+1}`));
  const href=await panel.getByRole('link').getAttribute('href');const url=new URL(href!);
  expect(url.hostname).toBe('wa.me');expect(url.pathname).toBe('/5516997087189');
  expect(url.searchParams.get('text')).toContain(title.toLowerCase());
 }
 await tabs.nth(7).press('Home');await expect(tabs.nth(0)).toBeFocused();
 await tabs.nth(0).press('ArrowDown');await expect(tabs.nth(1)).toBeFocused();
});
test('Formulário: validação e mensagem completa sem envio automático',async({page})=>{
 await page.goto('/');
 await page.evaluate(()=>{(window as unknown as {opened:string[]}).opened=[];window.open=(url)=>{(window as unknown as {opened:string[]}).opened.push(String(url));return null;}});
 const submit=page.getByRole('button',{name:'SOLICITAR PELO WHATSAPP'});
 await submit.click();expect(await page.locator('#name').evaluate((e:HTMLInputElement)=>e.validity.valueMissing)).toBe(true);
 await page.locator('#name').fill('   ');await page.locator('#vehicle').fill('Onix');await page.locator('#service').selectOption('Freios');await page.locator('#description').fill('Barulho ao frear');await submit.click();
 expect(await page.locator('#name').evaluate((e:HTMLInputElement)=>e.validity.customError)).toBe(true);
 await page.locator('#name').fill('Ana');await page.locator('#year').fill('2020');await submit.click();
 const opened=await page.evaluate(()=>(window as unknown as {opened:string[]}).opened);expect(opened).toHaveLength(1);
 const url=new URL(opened[0]);expect(url.pathname).toBe('/5516997087189');
 expect(url.searchParams.get('text')).toBe('Olá, equipe Leo Car! Gostaria de solicitar informações sobre um serviço.\n\nNome: Ana\nVeículo: Onix\nAno: 2020\nServiço: Freios\nDescrição: Barulho ao frear');
});
test('Galeria: abrir, navegar, Escape e restaurar foco',async({page})=>{
 await page.goto('/');const first=page.getByRole('button',{name:'Ampliar O ambiente, imagem ilustrativa'});await first.click();
 const dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();
 await page.getByRole('button',{name:'Próxima imagem'}).click();await expect(dialog.locator('img')).toHaveAttribute('src','/images/service-1.webp');
 await page.keyboard.press('ArrowLeft');await expect(dialog.locator('img')).toHaveAttribute('src','/images/workshop.webp');
 await page.keyboard.press('Escape');await expect(dialog).not.toBeVisible();await expect(first).toBeFocused();
});
test('Menu mobile e movimento reduzido',async({page})=>{
 await page.setViewportSize({width:375,height:812});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 await expect(page.locator('.intro')).not.toBeVisible();
 await page.getByRole('button',{name:'Abrir menu'}).click();await expect(page.getByRole('button',{name:'Fechar menu'})).toHaveAttribute('aria-expanded','true');
 await page.locator('#mobile-menu').getByRole('link',{name:/Serviços/}).click();await expect(page.locator('#mobile-menu')).toHaveCount(0);await expect(page).toHaveURL(/#servicos$/);
});
test('Links internos e destinos externos',async({page})=>{
 await page.goto('/');
 expect(await page.locator('a').evaluateAll(links=>links.filter(a=>a.getAttribute('href')?.startsWith('#')).map(a=>a.getAttribute('href')!).filter(h=>!document.getElementById(h.slice(1))))).toEqual([]);
 const links=await page.locator('a[href^="https://wa.me"]').evaluateAll(a=>a.map(el=>(el as HTMLAnchorElement).href));
 expect(links.length).toBeGreaterThan(5);for(const href of links){const url=new URL(href);expect(url.pathname).toBe('/5516997087189');expect(url.searchParams.get('text')?.length).toBeGreaterThan(15);}
 await expect(page.locator('a[href^="https://www.google.com/maps"]').first()).toHaveAttribute('href',/Manoel/);
});
