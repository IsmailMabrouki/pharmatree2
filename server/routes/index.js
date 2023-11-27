var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
} = require("../controllers/users.controllers");
var router = express.Router();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require("../controllers/profile.controllers");
const { create_product, get_all_products, get_product_by_id, update_product, delete_product } = require('../controllers/products.controllers');
/* products routes */

// Create a new product
router.post('/products', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), create_product);

// Get all products
router.get('/products',  get_all_products);

// Get a single product by ID
router.get('/products/:id', get_product_by_id);

// Update a product
router.put('/products/:id', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), update_product);

// Delete a product
router.delete('/products/:id', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), delete_product);



/* users routes. */
router.post("/register", Register);
router.post("/login", Login);

/* add profile route */
router.post("/profiles", 
passport.authenticate("jwt", { session: false }),
AddProfile);
/* get all profiles */
router.get("/profiles", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
FindAllProfiles);
/* get one profiles */
router.get("/profile", 
passport.authenticate("jwt", { session: false }),
FindSingleProfile);
/* delete profiles */
router.delete("/profiles/:id", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
DeleteProfile);

module.exports = router;
