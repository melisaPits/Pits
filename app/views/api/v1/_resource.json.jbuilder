json.type resource.classname.underscore.pluralize
json.id resource.id
json.attributes resource.attributes
if resource.classname.underscore.pluralize == "fotos_autos"
	json.imageURL url_for(resource.foto.variant(resize: "75X75"))
end