<template>
    <div>
      <div class="Container izquierda">
        <button class="btn btn-success" v-on:click="nuevo()">Nuevo Empleado</button>
        <br/><br/>

        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Direccion</th>
      <th scope="col">Telefono</th>
      <th scope="col">Puesto</th>
      <th scope="col">DPI</th>
      <th scope="col">Fecha Nacimiento</th>
      <th scope="col">Fecha Registro</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="empleados in Listaempleados" :key="empleados.id_empleado" v-on:click="editar(empleados.id_empleado)">
      <th scope="row">{{ empleados.id_empleado }}</th>
      <td>{{ empleados.nombre }}</td>
      <td>{{ empleados.apellido }}</td>
      <td>{{ empleados.direccion }}</td>
      <td>{{ empleados.telefono }}</td>
      <td>{{ empleados.puesto }}</td>
      <td>{{ empleados.dpi }}</td>
      <td>{{ empleados.fecha_nacimiento }}</td>
      <td>{{ empleados.fecha_ingreso_registro }}</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "EmpleadoView",
  data(){
    return{
      Listaempleados:null
    }
  },
  methods:{
    editar(id){
      this.$router.push('/editar/' + id);
      //console.log(id)
    },
    nuevo(){
      this.$router.push('/nuevo');
    }
  },
  mounted: function(){
    let direccion = "https://localhost:5001/api/empleados";
    axios.get(direccion).then( data =>{
      //console.log(data);
      this.Listaempleados = data.data;
    })
  }
}
</script>

<style scoped>
  .izquierda{
    text-align: left;
  }
</style>