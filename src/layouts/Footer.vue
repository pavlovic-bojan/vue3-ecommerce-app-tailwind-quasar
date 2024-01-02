<template>
    <div class="flex flex-row space-x-40 h-55 justify-center pt-10 text-base">
        <div>
            <span class="pt-5"><strong>ABOUT US</strong></span>
            <div class="flex flex-col mt-7">
                <span v-for="(item, index) in aboutUs" :key="index" class="my-1">
                    <RouterLink to="#">{{ item }}</RouterLink>
                </span>
            </div>
        </div>
        <div>
            <span class="pt-5"><strong>CUSTOMER SERVICE</strong></span>
            <div class="flex flex-col mt-7">
                <span v-for="(item, index) in customerService" :key="index" class="my-1">
                    <RouterLink to="#">{{ item }}</RouterLink>
                </span>
            </div>
        </div>
        <div>
            <span class="pt-5"><strong>HELP WITH SHOPPING</strong></span>
            <div class="flex flex-col mt-7">
                <span v-for="(item, index) in helpWithShopping" :key="index" class="my-1">
                    <RouterLink to="#">{{ item }}</RouterLink>
                </span>
            </div>
        </div>
        <div>
            <span class="pt-5"><strong>WHERE TO FIND US</strong></span>
            <div style="margin-top: 20%" class="flex flex-col">
                <span v-for="(item, index) in whereToFindUS" :key="index" class="my-1">
                    <RouterLink to="#">{{ item }}</RouterLink>
                </span>
            </div>
        </div>
    </div>
    <div class="h-20 pt-10">
        <ul class="flex flex-row justify-center text-black">
            <li class="mx-1" v-for="(item, index) in picturesOfCardsAndBanks" :key="index">
                <RouterLink to="#">
                    <img :src="item.src" :alt="item.alt" :style="item.style" />
                </RouterLink>
            </li>
        </ul>
    </div>
    <div class="h-16 bg-[#2c2c33] text-white flex flex-row">
        <a class="p-5" href="tel:0800 000 800"><span class="material-icons">phone </span> 0800 000 800</a>
        <span class="pt-5 pl-29 text-gray-400">Monday - Friday 08:00 - 18:00h</span>
        <span class="pt-5 text-gray-500 ml-auto mr-[45px]">Remiks© 2021 Platforma d.o.o. All rights reserved.</span>
    </div>

</template>
  
<script setup>
const aboutUs = ["About Remix", "Company information", "Contact", "Become a partner"]
const customerService = ["Terms of use", "Privacy Policy", "Right to withdraw"]
const helpWithShopping = ["Payment methods", "Delivery", "Complaints"]
const whereToFindUS = ["Facebook", "Instagram", "YouTube"]
const picturesOfCardsAndBanks = [{
    src: "https://remiks.com/media/payment/ChipCard-logo.png",
    alt: "Chip Card",
    style: "height: 32px; max-width: 140px"
    }, {
    src: "https://remiks.com/media/payment/maestro.png",
    alt: "Maestro",
    style: "height: 32px; max-width: 49px"
    }, {
    src: "https://remiks.com/media/payment/master.png",
    alt: "Master",
    style: "height: 32px; max-width: 49px"
    }, {
    src: "https://remiks.com/media/payment/visa.png",
    alt: "Visa",
    style: "height: 32px; max-width: 50px"
    }, {
    src: "https://remiks.com/media/payment/banca_intesa.png",
    alt: "Banca intesa",
    style: "height: 32px; max-width: 232px"
    }, {
    src: "https://remiks.com/media/payment/visa-secure-black.jpg",
    alt: "Visa protect",
    style: "height: 32px; max-width: 32px"
    }, {
    src: "https://remiks.com/media/payment/mastercard_securecode.gif",
    alt: "Mastercard securecode",
    style: "height: 32px; max-width: 60px"
    }]
</script>
  