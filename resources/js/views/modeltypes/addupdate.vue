<template>
    <div class="modal fade" id="addUpdateModelType" tabindex="-1" role="dialog" aria-labelledby="modeltypeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-sm" id="modeltypeModalLabel" v-if="editing">Edit ModelType</h5>
                    <h5 class="modal-title text-sm" id="modeltypeModalLabel" v-else>Create New Model Type</h5>
                    <button type="button" class="close" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form class="form-horizontal" @submit.prevent @keydown="modeltypeForm.errors.clear()">
                        <div class="card-body">
                            <div class="form-group row">
                                <label for="label" class="col-sm-4 col-form-label text-xs">Label</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-sm" id="label" name="label" placeholder="Label" v-model="modeltypeForm.label" readonly>
                                    <span class="invalid-feedback d-block text-xs" role="alert" v-if="modeltypeForm.errors.has('label')" v-text="modeltypeForm.errors.get('label')"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="namespace" class="col-sm-4 col-form-label text-xs text-xs">Namespace</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-sm" id="namespace" name="namespace" placeholder="Namespace" v-model="modeltypeForm.namespace">
                                    <span class="invalid-feedback d-block text-xs" role="alert" v-if="modeltypeForm.errors.has('namespace')" v-text="modeltypeForm.errors.get('namespace')"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="relative_type" class="col-sm-4 col-form-label text-xs text-xs">Relative Type</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-sm" id="relative_type" name="relative_type" placeholder="Array Separator" v-model="modeltypeForm.relative_type">
                                    <span class="invalid-feedback d-block text-xs" role="alert" v-if="modeltypeForm.errors.has('relative_type')" v-text="modeltypeForm.errors.get('relative_type')"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="full_type" class="col-sm-4 col-form-label text-xs text-xs">Full Type</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-sm" id="full_type" name="full_type" placeholder="Full Type" v-model="modeltypeForm.full_type">
                                    <span class="invalid-feedback d-block text-xs" role="alert" v-if="modeltypeForm.errors.has('full_type')" v-text="modeltypeForm.errors.get('full_type')"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="code" class="col-sm-4 col-form-label text-xs text-xs">Code</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-sm" id="code" name="code" placeholder="Code" v-model="modeltypeForm.code">
                                    <span class="invalid-feedback d-block text-xs" role="alert" v-if="modeltypeForm.errors.has('code')" v-text="modeltypeForm.errors.get('code')"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="select_modelattributes" class="col-sm-4 col-form-label text-xs text-xs">Attributes</label>
                                <div class="col-sm-8">
                                    <multiselect
                                        id="select_modelattributes"
                                        v-model="modeltypeForm.modelattributes"
                                        selected.sync="subjectForm.modelattributes"
                                        value=""
                                        :options="modelattributes"
                                        :searchable="true"
                                        :multiple="true"
                                        label="label"
                                        track-by="id"
                                        key="id"
                                        placeholder="Model Attributes"
                                    >
                                    </multiselect>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="description" class="col-sm-4 col-form-label text-xs text-xs">Description</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-sm" id="description" name="description" placeholder="Description" v-model="modeltypeForm.description">
                                    <span class="invalid-feedback d-block text-xs" role="alert" v-if="modeltypeForm.errors.has('description')" v-text="modeltypeForm.errors.get('description')"></span>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-secondary btn-sm" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-primary btn-sm" @click="updateModelType()" :disabled="!isValidForm" v-if="editing">Save</button>
                    <button type="button" class="btn btn-primary btn-sm" @click="createModelType()" :disabled="!isValidForm" v-else>Create New Model Type</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import ModelTypeBus from "./modeltypeBus";

    class ModelType {
        constructor(modeltype) {
            this.label = modeltype.label || ''
            this.namespace = modeltype.namespace || ''
            this.relative_type = modeltype.relative_type || ''
            this.full_type = modeltype.full_type || ''
            this.full_path = modeltype.full_path || ''
            this.code = modeltype.code || ''
            this.description = modeltype.description || ''
            this.modelattributes = modeltype.modelattributes || ''
        }
    }

    export default {
        name: "modeltype-addupdate",
        components: { Multiselect },
        mounted() {
            ModelTypeBus.$on('modeltype_edit', (modeltype) => {
                this.editing = true
                this.modeltype = new ModelType(modeltype)
                this.modeltypeForm = new Form(this.modeltype)
                this.modeltypeId = modeltype.id

                $('#addUpdateModelType').modal()
            })
        },
        created() {
            axios.get('/modelattributes.fetch')
                .then(({data}) => this.modelattributes = data);
        },
        data() {
            return {
                modeltype: {},
                modeltypeForm: new Form(new ModelType({})),
                modeltypeId: null,
                editing: false,
                loading: false,
                modelattributes: [],
            }
        },
        methods: {
            updateModelType() {
                this.loading = true

                this.modeltypeForm
                    .put(`/modeltypes/${this.modeltypeId}`)
                    .then(modeltype => {
                        this.loading = false
                        this.resetForm();

                        $('#addUpdateModelType').modal('hide')

                        this.$swal({
                            html: '<small>Model Type successfully updated !</small>',
                            icon: 'success',
                            timer: 3000
                        }).then(() => {
                            ModelTypeBus.$emit('modeltype_updated', modeltype)
                        })

                    }).catch(error => {
                    this.loading = false
                });
            },
            closeModal() {
                this.resetForm()
                $('#addUpdateModelType').modal('hide')
            },
            resetForm() {
                this.modeltypeForm.reset();
            }
        },
        computed: {
            isValidForm() {
                return !this.loading
            }
        }
    }
</script>

<style scoped>

</style>
