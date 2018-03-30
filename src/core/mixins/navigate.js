export default {
    methods: {
        jump(to){
            this.$router.push(to);
        },
        back(){
            this.$router.go(-1);
        }
    }
}