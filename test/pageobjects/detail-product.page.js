class detailProduct {

    //element locators
    // get xModal(){ return $('//button[@class="p-btn btn text-p-default relative btn-secondary btn-filled btn-square btn-circle no-animation editor--clickable right-[8px] top-[8px] bg-black/20"]')}
    get newArrival(){ return $("//span[normalize-space()='New Arrival']")}
    get product(){ return $('//div[@class="relative flex max-h-full max-w-full overflow-hidden product-image transition-opacity duration-500 overlay"]')}
    get productName (){ return $('//div[@class="text-h3-medium my-2"]')}
    
    get promo1(){return $('.p-container > div > div.mt-2 > div:nth-child(1) > div > div svg ~ svg')}
    get promo2(){return $('.p-container > div > div.mt-2 > div:nth-child(2) > div > div svg ~ svg')}
    get promo1Text (){return $('.p-modal__content').$('div=Beli minimum 200000, dapatkan 10000 Diskon Pengiriman')}
    get promo2Text (){return $('.p-modal__content').$('div=Beli minimum 250000, dapatkan 20000 Diskon Pengiriman')}
    
    get beli(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[5]/div[2]/button')}
    get keranjang(){return $('div.p-modal > div.p-modal__content> div.flex > div > button')}
    get textAdd(){return $('.flex').$('.text-h4-bold')}

    get tambahKeranjang(){ return $('#__nuxt > div > div > div.p-container > div.w-full > div:nth-child(6) > button')}
    get xsSize(){ return $('div=XS')}
    get addKeranjang(){return $('body > div.p-modal > div.p-modal__content > div.flex > div > button')}
    
    get pilihArea(){return $('//span[normalize-space()="Pilih Area"]//*[name()="svg"]')}
    get provBali(){return $('div=Bali')}
    get kotaBadung (){return $('div=Kab. Badung')}
    get areaAbi (){return $('div=Abiansemal')}
    get textArea(){return $('span=Badung, Abiansemal')}

    // get sizeChart(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[10]/button')}

    get hastagDress(){return $('div.p-row > div.p-col > a.card')}
    get textDress(){return $('.flex').$('div=Kimmy Dress 2.0 White')}
    
    get kategoriKimmy(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[1]/div/div[3]')}
    get textKimmy(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[1]/div/div')}

    get ekspedisi(){return $('div.flat-card > div.flex > div ~ div > div > button')}
    get textJNE(){return $('div.p-dropdown__content > ul.menu')}

    get quantity(){return $('div.flex > div.w-full > div.quantity-teleport-target > div.mb-3 >button ~ button')}

    get ongkir(){return $('#__nuxt > div > div > div.p-container.w-full.mx-auto.max-w-screen-lg.flex.flex-wrap.pb-6 > div.w-full > div.flat-card.product__shipping.mt-4 > div.flex.items-center.justify-between > div.flex-0-0 > button')}
    get textOngkir(){return $('#__nuxt > div > div > div.p-container > div.w-full > div.flat-card > div.flex > div.flex-0-0 > div > button > span')}


    //page actions
    async openPage(){
        await browser.url('https://jilbrave.com/')        
        // await this.xModal.click();
    }
    async goToDetailProduct(){
        await this.newArrival.click();
        await browser.pause(3000)
        await this.product.scrollIntoView({ block: 'center', inline: 'center' })
        await browser.pause(3000)
        await this.product.click();
    }    

    async promo1Button(){
        await this.promo1.click();
        await browser.pause(3000)
    }

    // async promo1getText(){
    //     await this.promo1Text.getText()
    // }
    async promo2Button(){
        await this.promo2.click();
        await browser.pause(3000)
    }
    async usingBeliButton(){
        await this.beli.click();        
        await this.keranjang.click();
    }
    async usingTambahKeranjang(){
        // await browser.scroll(0,500)
        await this.tambahKeranjang.scrollIntoView({ block: 'center', inline: 'center' })
        await this.tambahKeranjang.click()
        await this.xsSize.click()
        await this.addKeranjang.click()
    }

    async chooseArea(){
        await this.pilihArea.scrollIntoView({ block: 'center', inline: 'center' })
        await this.pilihArea.click()
        await this.provBali.click()
        await this.kotaBadung.click()
        await this.areaAbi.click()
    }

    async checkOngkir(){
        // await this.ongkir.scrollIntoView({ block: 'center', inline: 'center' })
        await this.ongkir.click()
    }

    async checkHastagDress(){
        await this.hastagDress.scrollIntoView({ block: 'center', inline: 'center' })
        await this.hastagDress.click()
    }

    async checkKimmy(){
        await this.kategoriKimmy.scrollIntoView({ block: 'center', inline: 'center' })
        await this.kategoriKimmy.click()
    }

    async checkEkspedisi(){
        await this.ekspedisi.click()
    }

    async addQuantity(){
        await this.beli.click();
        await browser.pause(3000)
        await this.quantity.scrollIntoView({ block: 'center', inline: 'center' })
        await this.quantity.click();
        await this.keranjang.scrollIntoView({ block: 'center', inline: 'center' })
        await this.keranjang.click();

    }
    

}

export default new detailProduct()