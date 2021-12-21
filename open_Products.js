
function passData(soap_name)
{
    if (soap_name == 'eucalyptus')
    {
        var carousel = ["enchanted eucalyptus 3.PNG", "enchanted eucalyptus 2.PNG"];
        var data = ["Enchanted eucalyptus", "Eucalyptus essential oil is great for maintaining skin health. It is a great cleansing and purifying agent as well as helps to boost blood flow to the brain, increasing mental activity and drives stress away and instantly lifting your mood.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('eucalyptus').href = "product1.html";
    }

    if (soap_name == 'compassionate_coffee')
    {
        var carousel = ["compassionate coffee 3.PNG", "compassionate coffee 2.PNG"];
        var data = ["Compassionate Coffee", "A heavenly smelling soap bar! Coffee is rich in antioxidants that help protect you from skin damage and aging as well. Soaps with coffee help decrease  the appearance of sunspots, redness, and fine lines. Whiles, Peppermint Essential Oil boosts circulation , releases the feeling of tiredness, and even soothes itchy skin.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('compassionate_coffee').href = "product1.html";
    }

    if (soap_name == 'face_feet')
    {
        var carousel = ["face feet fun soap 3.PNG", "face feet fun soap 2.PNG"];
        var data = ["face feet fun soap ", "A fun soap with Turmeric as its hero! Our turmeric Face Bombs will revive - your skin by bringing out its natural glow, leaving skin dewey, fresh and sparky clean in just one wash. Lemon Essential Oil acts as a detoxifying agent that nourishes and cleanses skin while clearing up skin issues such as oiliness and acne.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('face_feet').href = "product1.html";
    }

    if (soap_name == 'grapefruit')
    {
        var carousel = ["grapefruit loofah 1.PNG", "grapefruit loofah 2.PNG"];
        var data = ["Grapefruit Gratitude ", "Grapefruit essential oil has potent antibacterial and antimicrobial effects. It strives for healthy skin by preventing and treating various skin conditions too.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('grapefruit').href = "product1.html";
    }

    if (soap_name == 'lavender')
    {
        var carousel = ["lavender love 1.PNG", "lavender love 2.PNG"];
        var data = ["Lavender Love ", "The bar is full of Love & Lavender! The fresh, floral scent of lavender has a calming effect on the body and is used to treat stress, depression and anxiety. It also helps treat acne, lighten skin, reduce wrinkles.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('lavender').href = "product1.html";
    }

    if (soap_name == 'lemon')
    {
        var carousel = ["lemon lust 1.PNG", "lemon lust 2.PNG"];
        var data = ["Lemon Lust", "Lemon Essential Oil acts as a detoxifying agent that nourishes, cleanses, and exfoliates skin while clearing up skin issues such as oiliness and acne. It fights exhaustion, depression, clears your skin and reduces inflammation.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('lemon').href = "product1.html";
    }

    if (soap_name == 'rosemary')
    {
        var carousel = ["rosemary romance 1.PNG", "rosemary romance 2.PNG"];
        var data = ["Rosemary Romance", "Rosemary Essential Oil helps to rejuvenate the skin and release stress from the body. It hydrates skin which helps to control oil production. It provides an antibacterial surface for the skin, beneficial to conditions such as eczema.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('rosemary').href = "product1.html";
    }

    if (soap_name == 'sugar')
    {
        var carousel = ["sugar suprise 1.PNG", "sugar suprise 2.PNG"];
        var data = ["Sugar Suprise", "Cute Sugar Cubes (3 in I) with loads of Sugar, Coconut Oil and Butter which exfoliates/cleanses/moisturizes. Sugar scrubs brighten tired, dull-looking skin to promote healthy, smooth, and flawless skin. They also fight skin aging in a natural way. To be used to exfoliate hands and legs. Not suitable for face.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('sugar').href = "product1.html";
    }

    if (soap_name == 'tea')
    {
        var carousel = ["tea tree truimph 1.PNG", "tea tree truimph 2.PNG"];
        var data = ["Tea Tree Truimph", "For those fighting acne and other skin problems! A translucent bar enriched with Tea Tree Oil, Aloe Vera. Tea Tree Essential Oil is a powerful natural antimicrobial agent, and also is known for its anti-inflammatory, soothing effect, giving you relief from skin conditions and infections while treating them effectively. It significantly improves mild to moderate acne.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('tea').href = "product1.html";
    }

    if (soap_name == 'thunder')
    {
        var carousel = ["thunder tea tree trumiph 1.PNG", "thunder tea tree trumiph 1.PNG"];
        var data = ["Thunder Tea Tree Trumiph", "A Tea Tree Triumph, With Activated Charcoal! Capable of removing dead skin, lightens under arms. This soap helps reduce pigmentation and tightens skin, making you look younger. Regular use of Charcoal soap provides amazing results for a blemish-free skin. It effectively removes or pulls impurities and toxins from skin.", "Wet skin with water, gently apply the soap and rinse.", "Eucalyptus,Oats,Beetroot,Coffee,Tumeric,Cocoa,Rice,Walnut,Lemon Peel, Loofah, Fuller's Earth."];
        localStorage.setItem("carousel", JSON.stringify(carousel));
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById('thunder').href = "product1.html";
    }
}