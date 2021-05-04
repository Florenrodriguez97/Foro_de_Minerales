module.exports ={

    index : (req,res)=>{
        res.render('index')
    },


    glosario : (req,res)=>{
         res.render('glosario')
    },


    top10 : (req,res)=>{
         res.render('top10')
    },


    piedrasPreciosas : (req,res)=>{
        res.render('piedrasPreciosas')
    },


    sobreNosotros : (req,res)=>{
        res.render('sobreNosotros')
    },


    nuestrasRedes : (req,res)=>{
       res.render('nuestrasRedes')
    },
    busquedaDeMinerales: (req,res) =>{
       res.render('busquedaDeMinerales')
    }
   
    
}
