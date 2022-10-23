<template>
    <div>
        <div class="container">
            <form class="form-horizontal" action="">
                <div class="form-group left">

                    <label for="" class="control-label col-sm-2">Nombre</label>
                    <div class="col-sm-10">
                        <input type="text" name="nombre" id="nombre" class="form-control" v-model="form.nombre">
                    </div>

                    <label for="" class="control-label col-sm-2">Apellido</label>
                    <div class="col-sm-10">
                        <input type="text" name="apellido" id="apellido" class="form-control" v-model="form.apellido">
                    </div>

                    <label for="" class="control-label col-sm-2">Direccion</label>
                    <div class="col-sm-10">
                        <input type="text" name="direccion" id="direccion" class="form-control" v-model="form.direccion">
                    </div>

                    <label for="" class="control-label col-sm-2">Telefono</label>
                    <div class="col-sm-10">
                        <input type="text" name="telefono" id="telefono" class="form-control" v-model="form.telefono">
                    </div>

                    <label for="" class="control-label col-sm-2">Puesto</label>
                    <div class="col-sm-10">
                        <input type="text" name="id_puesto" id="id_puesto" class="form-control" v-model="form.id_puesto">
                    </div>

                    <label for="" class="control-label col-sm-2">DPI</label>
                    <div class="col-sm-10">
                        <input type="text" name="dpi" id="dpi" class="form-control" v-model="form.dpi">
                    </div>

                    <label for="" class="control-label col-sm-4">Fecha Nacimiento</label>
                    <div class="col-sm-10">
                        <input type="text" name="fecha_nacimiento" id="fecha_nacimiento" class="form-control" v-model="form.fecha_nacimiento">
                    </div>

                    <label for="" class="control-label col-sm-2">Fecha Registro</label>
                    <div class="col-sm-10">
                        <input type="text" name="fecha_ingreso_registro" id="fecha_ingreso_registro" class="form-control" v-model="form.fecha_ingreso_registro">
                    </div>

                    <div class="form-group">
                        <button type="button" class="btn btn-primary" v-on:click="editar">Editar</button>
                        <button type="button" class="btn btn-danger" v-on:click="eliminar()">Eliminar</button>
                        <button type="button" class="btn btn-dark" v-on:click="salir">Salir</button>
                    </div>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: "EditarView",
    data: function(){
        return{
            form:{
                "id_empleado": "",
                "nombre": "",
                "apellido": "",
                "direccion": "",
                "telefono": "",
                "id_puesto": "",
                "dpi": "",
                "fecha_nacimiento": "",
                "fecha_ingreso_registro": ""
            }
        }
    },
    methods:{
        editar(){
            axios.put("https://localhost:5001/api/empleados", this.form)
            .then( data =>{
                console.log(data);
            })
        },
        salir(){
            this.$router.push("/empleado");
        },
        eliminar(){
            this.form.id_empleado = this.$route.params.id;
            axios.delete("https://localhost:5001/api/empleados/" + this.form.id_empleado)
            .then( datos =>{
                console.log(datos);
                this.$router.push("/empleado");
            });
        }
    },
    mounted: function(){
        this.form.id_empleado = this.$route.params.id;
        //console.log(this.id_empleado);
        axios.get("https://localhost:5001/api/empleados/" + this.form.id_empleado)
        .then( datos =>{
            //console.log(datos);
            this.form.nombre = datos.data.nombre;
            this.form.apellido = datos.data.apellido;
            this.form.direccion = datos.data.direccion;
            this.form.telefono = datos.data.telefono;
            this.form.id_puesto = datos.data.id_puesto;
            this.form.dpi = datos.data.dpi;
            this.form.fecha_nacimiento = datos.data.fecha_nacimiento;
            this.form.fecha_ingreso_registro = datos.data.fecha_ingreso_registro;
            //console.log(this.form);
        })
    }
}
</script>

<style scoped>
.left{
    text-align: left;
}
</style>