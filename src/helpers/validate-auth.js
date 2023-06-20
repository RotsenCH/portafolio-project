// Función para proteger rutas

module.exports.isAuthenticated = (req,res,next)=>{
    // Validcion del isAuthenticated
    if(req.isAuthenticated()){
        // Continua con las demás rutas
        return next()
    }
    res.redirect('/user/login')
}