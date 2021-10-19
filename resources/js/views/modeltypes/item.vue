<template>
    <div class="row">
        <div class="col-sm-2 col-6 border-right">
            <span class="text text-sm d-inline-block text-truncate text-sm-left" style="max-width: 100%;">{{ modeltype.label }}</span>
        </div>
        <!-- /.col -->
        <div class="col-sm-3 col-6 border-right">
            <span class="text text-xs">{{ modeltype.namespace }}</span>
        </div>
        <!-- /.col -->
        <div class="col-sm-3 col-6 border-right">
            <span class="text text-xs">{{ modeltype.relative_type }}</span>
        </div>
        <!-- /.col -->
        <div class="col-sm-2 col-6 border-right">
            <label class="badge badge-default" style="display: block" v-for="modelattribute in modeltype.modelattributes" v-if="modeltype.modelattributes" :key="modelattribute.id">
                {{ modelattribute.label }}
            </label>
        </div>
        <!-- /.col -->
        <div class="col-sm-2 col-6">
            <span class="text text-xs text-center">
                <a @click="editModelType(modeltype)" class="text text-success">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </a>
            </span>
        </div>

    </div class="row">
    <!-- /.row -->
</template>

<script>
    import ModelTypeBus from "./modeltypeBus";

    export default {
        name: "modeltype-item",
        props: {
            modeltype_prop: {}
        },
        components: {
        },
        mounted() {
            ModelTypeBus.$on('modeltype_updated', (modeltype) => {
                if (this.modeltype.id === modeltype.id) {
                    this.modeltype = modeltype
                }
            })
        },
        data() {
            return {
                modeltype: this.modeltype_prop,
            };
        },
        methods: {
            editModelType(modeltype) {
                ModelTypeBus.$emit('modeltype_edit',modeltype);
            }
        },
        computed: {}
    }
</script>

<style scoped>

</style>
