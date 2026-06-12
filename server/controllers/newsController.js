exports.getNews=(req,res)=>{

const schemes=[

{
title:"PM Kisan Scheme",
description:
"Financial support for farmers."
},

{
title:"Soil Health Card",
description:
"Provides soil nutrient status."
},

{
title:"Crop Insurance Scheme",
description:
"Insurance against crop losses."
},

{
title:"Kisan Credit Card",
description:
"Easy agricultural loans."
}

];

res.json(schemes);

};