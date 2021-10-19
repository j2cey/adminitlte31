<template>
    <div class="card collapsed-card">
        <div class="card-header">
            <h5 class="card-title">{{ list_title }}
                <small class="text text-xs">
                    {{ searchModelTypes === "" ? "" : " (" + filteredModelTypes.length + ")" }}
                </small>
            </h5>

            <div class="card-tools">

                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-plus"></i>
                </button>
                <div class="btn-group">
                    <button type="button" class="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                        <i class="fas fa-wrench"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" role="menu">
                        <a href="#" class="dropdown-item">Action</a>
                        <a href="#" class="dropdown-item">Another action</a>
                        <a href="#" class="dropdown-item">Something else here</a>
                        <a class="dropdown-divider"></a>
                        <a href="#" class="dropdown-item">Separated link</a>
                    </div>
                </div>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
            <table class="table table-head-fixed text-nowrap">
                <thead>
                <tr>
                    <th>
                        <div class="row">
                            <div class="col-sm-2 col-6"></div>
                            <div class="col-sm-3 col-6"></div>
                            <div class="col-sm-3 col-6"></div>
                            <div class="col-sm-2 col-6"></div>
                            <div class="col-sm-2 col-6">
                                <div class="btn-group">
                                    <div class="input-group input-group-sm">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" v-model="searchModelTypes">
                                        <div class="input-group-append">
                                            <button class="btn btn-navbar" type="button">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2 col-6">
                                <span class="text text-sm">Label</span>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-3 col-6">
                                <span class="text text-sm">Namespace</span>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-3 col-6">
                                <span class="text text-sm">Type</span>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-2 col-6">
                                <span class="text text-sm">Attributes</span>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-2 col-6">
                                <span class="text text-sm"></span>
                            </div>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(modeltype, index) in filteredModelTypes" v-if="filteredModelTypes" :key="modeltype.id" class="text text-xs">
                    <td>
                        <ModelTypeItem v-if="modeltype.label && index < 10" :modeltype_prop="modeltype"></ModelTypeItem>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!-- ./card-body -->
        <div class="card-footer">

        </div>
        <!-- /.card-footer -->
        <ModelTypeAddUpdate></ModelTypeAddUpdate>
    </div>
    <!-- /.card -->
</template>

<script>
    export default {
        name: "modeltype-item-list",
        props: {
            list_title_prop: {default: "ModelTypes", type: String},
            modeltypes_prop: {}
        },
        components: {
            ModelTypeAddUpdate: () => import('./addupdate'),
            ModelTypeItem: () => import('./item')
        },
        data() {
            return {
                list_title: this.list_title_prop,
                modeltypes: this.modeltypes_prop,
                searchModelTypes: "",
            };
        },
        methods: {
        },
        computed: {
            filteredModelTypes() {

                let tempModelTypes = this.modeltypes

                if (this.searchModelTypes !== '' && this.searchModelTypes) {
                    tempModelTypes = tempModelTypes.filter((item) => {
                        return item.label
                            .toUpperCase()
                            .includes(this.searchModelTypes.toUpperCase())
                    })
                }

                // Sorting
                tempModelTypes = tempModelTypes.sort((a, b) => {
                    let fa = a.label.toLowerCase(), fb = b.label.toLowerCase()

                    if (fa > fb) {
                        return -1
                    }
                    if (fa < fb) {
                        return 1
                    }
                    return 0
                })

                if (!this.ascending) {
                    tempModelTypes.reverse()
                }
                // end Sorting

                return tempModelTypes
            }
        }
    }
</script>

<style scoped>

</style>
