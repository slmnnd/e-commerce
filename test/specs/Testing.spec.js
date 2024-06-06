import {browser,expect} from '@wdio/globals'
import detailProduct from '../pageobjects/detail-product.page.js'

describe('Detail Product Page', function () {
    before('user akses link web dan sudah berada di halaman detail product', async function () {
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()
        await browser.pause(3000)
        await expect(detailProduct.productName).toHaveText('Kimmy Dress 2.0 Dark Grey')
    })

    it('User cek info promo Beli minimum 200000, dapatkan 10000 Diskon Pengiriman', async function () {  
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()           
        await detailProduct.promo1Button()
        await browser.pause(3000)
        await expect(detailProduct.promo1Text).toHaveText('Beli minimum 200000, dapatkan 10000 Diskon Pengiriman')
    })

    it('User cek info promo Beli minimum 250000, dapatkan 20000 Diskon Pengiriman', async function () {    
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()          
        await detailProduct.promo2Button()
        await browser.pause(3000)
        await expect(detailProduct.promo1Text).toHaveText('Beli minimum 250000, dapatkan 20000 Diskon Pengiriman')
    })

    it('User tambah ke keranjang dengan ukuran XS dengan jumlah 1 produk menggunakan tombol beli', async function () {
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()
        await detailProduct.usingBeliButton()
        await browser.pause(3000)
        expect(detailProduct.textAdd).toHaveText('1 Barang di Keranjang Saya')
    })

    it('User tambah ke keranjang dengan menggunakan tombol Tambah Ke Keranjang', async function () {
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()
        await detailProduct.usingTambahKeranjang()
        await browser.pause(3000)
        expect(detailProduct.textAdd).toHaveText('1 Barang di Keranjang Saya')
    })

    it('User memilih lokasi pengiriman', async function () {
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()
        await detailProduct.chooseArea()
        await browser.pause(3000)
        expect(detailProduct.textArea).toHaveText('Badung, Abiansemal')

    })
    it('User mengecek ongkos kirim barang', async function () {
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()
        await detailProduct.chooseArea()
        await detailProduct.checkOngkir()        
        await browser.pause(3000)
        expect(detailProduct.textOngkir).toHaveText('Rp 27,000')
    })
    it('User mengecek hastag #dress', async function () {
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()
        await detailProduct.checkHastagDress()
        await browser.pause(3000)
        expect(detailProduct.textDress).toHaveText('Kimmy Dress 2.0 White')
    })

    it('User mengecek kategori Kimmy Dress 2.0 pada product', async function () {
        await detailProduct.openPage()
        await detailProduct.goToDetailProduct()
        await detailProduct.checkKimmy()        
        await browser.pause(3000)
        expect(detailProduct.textKimmy).toHaveText('Kimmy Dress 2.0')

    })
    it('User memilih product "Jilbrave Voucher Card 25K" pada recommendation bar', async function () {
        await detailProduct.chooseVoucher()
        await browser.pause(3000)
        expect(detailProduct.textVoucher).toHaveText('Jilbrave Voucher Card 25K')

    })
    it('User menambah kuantitas produk menjadi 2 ketika tambah ke keranjang', async function () {
        await detailProduct.addQuantity()
        await browser.pause(3000)
        expect(detailProduct.textAdd).toHaveText('2 Barang di Keranjang Saya')

    })
})