class detailProduct {

    //element locators
    get xModal(){ return $('//button[@class="p-btn btn text-p-default relative btn-secondary btn-filled btn-square btn-circle no-animation editor--clickable right-[8px] top-[8px] bg-black/20"]')}
    get newArrival(){ return $("//span[normalize-space()='New Arrival']")}
    get product(){ return $('//div[@class="relative flex max-h-full max-w-full overflow-hidden product-image transition-opacity duration-500 overlay"]')}
    get productName (){ return $('//div[@class="text-h3-medium my-2"]')}
    
    get promo1(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[4]/div[2]/div/div/div/svg[2]')}
    get promo2(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[4]/div[3]/div/div/div/svg[2]/path')}
    get promo1Text (){return $('//div[@class="mb-3 flex items-center px-4 pt-4 text-h3-semibold pr-10"]')}
    get promo2Text (){return $('/html/body/div[8]/div[2]/div[1]')}
    
    get beli(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[5]/div[2]/button')}
    get keranjang(){return $('//span[contains(text(),"Tambah Ke Keranjang")]')}
    get textAdd(){return $('//*[@id="__nuxt"]/div/div/div[2]/div/div[1]/div/div/button/span/div[1]/div[1]')}
    get tambahKeranjang(){ return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[6]/button')}
    get xsSize(){ return $('/html/body/div[12]/div[2]/div[2]/div/div/div[2]/div[1]/div')}
    get addKeranjang(){return $('/html/body/div[12]/div[2]/div[3]/div/button/span')}
    
    get pilihArea(){return $('//span[normalize-space()="Pilih Area"]//*[name()="svg"]')}
    get provBali(){return $('/html/body/div[14]/div[2]/div[3]/div/div[3]/div[1]/div[1]')}
    get kotaBadung (){return $('/html/body/div[14]/div[2]/div[3]/div/div[3]/div[1]')}
    get areaAbi (){return $('/html/body/div[14]/div[2]/div[3]/div/div[3]/div[1]')}
    get textArea(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[9]/div[2]/button/span')}

    get sizeChart(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[10]/button')}

    get hastagDress(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[11]')}
    get textDress(){return $('//*[@id="__nuxt"]/div/div/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[3]/a/div/div[2]/div[1]')}
    
    get kategoriKimmy(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[1]/div/div[3]')}
    get textKimmy(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[1]/div/div')}

    get voucher(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[3]/div[1]/div[2]/div/div[3]/div/div/div[2]')}
    get textVoucher(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[2]')}

    get quantity(){return $('/html/body/div[13]/div[2]/div[3]/div/div/div[2]/button[2]')}

    get ongkir(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[9]/div[3]/div[2]/button')}
    get textOngkir(){return $('//*[@id="__nuxt"]/div/div/div[1]/div[2]/div[9]/div[3]/div[2]/div/button/span')}


    //page actions
    async openPage(){
        await browser.url('https://jilbrave.com/')
    }
    async goToDetailProduct(){
        await this.xModal.click();
        await this.newArrival.click();
        await this.product.click();
    }    

    async promo1Button(){
        await this.promo1.click();
    }
    async promo2Button(){
        await this.promo2.click();
    }
    async usingBeliButton(){
        await this.beli.click();
        await this.keranjang.click();
    }
    async usingTambahKeranjang(){
        await this.tambahKeranjang.click()
        await this.xsSize.click()
        await this.addKeranjang.click()
    }

    async chooseArea(){
        await this.pilihArea.click()
        await this.provBali.click()
        await this.kotaBadung.click()
        await this.areaAbi.click()
    }

    async checkSizeChart(){
        await this.sizeChart.click()
    }

    async checkHastagDress(){
        await this.hastagDress.click()
    }

    async checkKimmy(){
        await this.kategoriKimmy.click()
    }

    async chooseVoucher(){
        await this.voucher.click()
    }

    async addQuantity(){
        await this.beli.click();
        await this.quantity.click();
        await this.keranjang.click();

    }

    async checkOngkir(){
        await this.ongkir.click()
    }

}

export default new detailProduct()