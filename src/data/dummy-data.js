import Illness from '../models/illness';

const ILLNESSES = [
    new Illness(
        'p1',
        'Allergies',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Allergic rhinitis--colloquially known as 'hay fever' --involves inflammation of the nasal mucous membranes due to an allergic reaction. This inflammation can sometimes be hard to distinguish from acute rhinosinusitis caused by a virus. Typical symptoms include a runny or stuffy nose, sneezing and itchy eyes and nose. If these symptoms are short-lived (no more than 10 days), then they are likely due to a cold or flue virus; if they last for 4 weeks or longer, then the condition is classified as chronic and is likely due to allergies. \n\nIf what you're experiencing is indeed allergic rhiniitis, home remedies include saline nasal rinses used with a \"Neti pot,\" saline nasal sprays, over-the -counter allergy medication, and certain types of probiotic supplements. You may also find relief by doing exercises such as rebounding which circulate your lymph system to reduce congestion. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Allergies and are you ready for your online visit?',
        'Runny nose and/or nasal congestion',
        'Sneezing',
        'Coughing',
        'Itchy or watering eyes',
        'Swollen skin under eyes',
        'Fatigue',
        'Other/none of the above',
        null,
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p2',
        'Sore Throa',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Typical symptoms of a sore throat include pain when swallowing, swollen glands on the neck or jaw, and a hoarse or muffled voice.\n\nTo manage the symptoms of a sore throat, SAMI-Aid Medical professionals recommend getting plenty of rest; sleep helps your body fight infection, drinking plently of water, eating soothing food, gargling with warm salt water, using a humidifier and staying away grom irritants like smoke. If symptoms persist seek advice from healthcare professional.",
        'Do you have a Sore Throat and are you ready for your online visit?',
        'No',
        'I did have a fever',
        'Low-grade fever (up to 100.4°F)',
        'Mid-grade fever (100.5°F to 102.9°F)',
        'High-grade fever (103°F or above)',
        'Other/none of the above',
        null,
        null,
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p3',
        'Urinary Tract Infection (UTI)',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "A UTI is an infection of the urinary tract, most often of the bladder and urethra. It is caused by bacteria such as E.coli. Symptoms include pain during urination, mis-colored urine, and a strong, persistent urge to urinate. \n\nHome remedies which can help prevent UTIs include increasing vitamin C intake, drinking cranberry juice, taking probiotic supplements, urinating frequently and practicing a good sexual hygiene. If you already have a UTI, herbal remedies and dietary changes may help, but you should seek professional medical attention immediately. UTIs are often treated with antibiotics which are not available over the counter. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Urinary Tract Infection (UTI) and are you ready for your online visit?',
        'Strong persistent urge to urinate',
        'Frequent need to urinate',
        'Burning sensation when urinating',
        'Cloudy urine',
        'Reddish or abnormally colored urine',
        'Strong-smelling urine',
        'Other/none of the above',
        null,
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p4',
        'Sinus Cold Symptoms',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "The common cold is often associated with a sinus infection, characterized by a stuffy or runny nose; this is often accompanied by a sore throat, coughing, shivering, head and body aches, and mild fever. A fever higher than 101 \u00b0F is unusual as a cold symptom, so if you have a high fever or if your symptoms begin with a fever, then you might be suffering from a flu virus. \n\nSinus infections are caused by viruses which the body's immune system usually eliminated within a matter of days. Antibiotics will not help with a sinus infection and may cause undesirable side effects. Instead, you can try simply resting, staying hydrated, rinsing your nasal passages, doing mild exercises which circulate your lymph system, and taking simple over-the-counter pain relievers if necessary. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Sinus Cold Symptoms and are you ready for your online visit?',
        'Runny or stuffy nose',
        'Sore throat',
        'Coughing',
        'Congestion',
        'Headache',
        'Body aches',
        'Shivering',
        'Low- or medium-grade fever',
        'Other/none of the above',
        null,
        null,
        null
    ),
    new Illness(
        'p5',
        'Flu Symptoms',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Symptoms of a flu virus include most symptoms of a common cold--stuffy or runny nose, headache, stomachache, congestion, fatigue--but may also often include vomiting, diarrhea, and moderate- or high-level fever. Flu viruses are more likely to require medical attention than common cold viruses. \n\nTo manage the symptoms of the Flu, SAMI-Aid Medical professionals, recommend taking oregano oil for flu and cold, taking NAC (N-acetyl L-cysteine), and using olive leaf extract. Patients can also fight off nausea with ginger, they can take probiotics and stay hydrated by drinking lots of water. Remember to also use lots of honey, lemon, and tea as home remedies for flu. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Flu Symptoms and are you ready for your online visit?',
        'Sore throat',
        'Headache',
        'Stomachache',
        'Chills and sweats',
        'Nasal congestion',
        'Fatigue',
        'High-grade fever (100.5°F or above)',
        'Other/none of the above',
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p6',
        'Pink Eye',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Most cases of pink eye are caused by a virus. Both viral and bacterial conjunctivitis can occur along with colds or symptoms of a respiratory infection, such as a sore throat. Wearing contact lenses that aren't cleaned properly or aren't your own cause bacterial conjunctivitis. \n\nTo manage the symptoms of Pink Eye, SAMI-Aid Medical professionals recommend applying a compress to your eyes. To make a compress, soak a clean, lint-free cloth in water and wring it out before applying it gently to your closed eyelids. You can also use eyedrops. Make sure to stop wearing contact lenses if you use them. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Pink Eye and are you ready for your online visit?',
        'Abnormally red eyes',
        'Abnormally watery eyes',
        'Itchy eyes',
        'Burning sensation in eyes',
        'Blurry vision',
        'Watery or crusty discharge from eyes',
        'Other/none of the above',
        null,
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p7',
        'Persistent diarrhea',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Typical symptoms associated with diarrhea include stomach pain, abdominal cramps, bloating, thirst, nausea, dehydration, and in some cases even bloody stools, fever and chills, light-headedness, and vomiting. Acute diarrhea is typically caysed by a virus and lasts only a matter of days. Chronic diarrhea, by contrast, lasts for weeks and may be indicative of a serious disorder such as Celiac's disease or Crohn's disease.\n\nTo manage the symptoms of Diarrhea, SAMI-Aid Medical professionals recommend drinking lots of water! You can also drink sports drinks, which can help replenish the essential electrolytes sodium and potassium. Certain probiotic supplements can speed recovery from diarrhea, as can over-the -counter antimotility drugs. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Persistent diarrhea and are you ready for your online visit?',
        'Stomach pain',
        'Abdominal cramps',
        'Bloating',
        'Thirst',
        'Weight loss',
        'Fever',
        'Blood or pus in the stools',
        'Persistent vomiting dehydration',
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p8',
        'Vomiting',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Nausea and vomiting are not diseases, but rather are symptoms of many different conditions, such as infection (stomach flu), food poisoning, motion sickness, overeating, blocked intestine, illness, concussion or brain injury, appendicitis, and migraines, Nausea and vomiting can sometimes of more serious diseases such as heart attacks, kidney or liver disorders, central nervous systems disorders, brain tumors and some forms of cancer.\n\nTo manage the symptoms of Vomiting, SAMI-Aid Medical professionals recommend drinking water, sports drinks, or broths. Eat only as much as you can tolerate, but only light, stomach friendly foods, like crackers or plain bread to start. Stay away from fried or greasy foods and sweets. Eat small meals and eat them slowly. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Vomiting and are you ready for your online visit?',
        'Morning sickness',
        'Food poisoning',
        'vertigo',
        'Motion sickness',
        'Dark or cloudy urine',
        'Dry or cloudy urine',
        'Headaches',
        'Less frequent urination',
        'Irritability',
        'Confusion',
        'Rapid heart rate',
        'Extreme thirst'
    ),
    new Illness(
        'p9',
        'Abdominal Pain',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Abdominal pain can be caused by many conditions. However, the main causes are infection, abnormal growths, inflammation, obstruction (blockage), and intestinal disorders. Digestive problems are considered the most common cause of abdominal pain. Most cases resolve on their own without medical attention. Sudden or intense pain requires immediate medical attention. Over-the-counter medication can alleviate symptoms of mild abdominal pain.\n\nTo manage the symptoms of Abdominal Pain, SAMI-Aid Medical professionals recommend eating less, taking small amounts of baking soda, using lemon and/or lime juice. Don't smoke or drink alcohol. Some health care professionals recommend using ginger, peppermint, licorice, chamomile tea, medications like Pepto-Bismol, loperamide (lomdium), ranitidine (Zantac) and other over-the-counter substances. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Abdominal Pain and are you ready for your online visit?',
        'Fever',
        'Inability to eat without vomiting',
        'Difficulty breathing or chest pain',
        'Irregular heartbeat',
        'A feeling of lightheadedness or that you faint',
        'Dark or black stool',
        'vomiting blood',
        null,
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p10',
        'Shortness of breath',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Excessively rapid breathing is known as hyperventilation. Shortness of breath is also referred to as dyspnea. Causes of shortness of breath include asthma, bronchitis, pneumonia, pneumothorax, anemia, lung cancer, inhalation injury and high altitude with lower oxygen levels. Shortness of breath is commonly associated with symptoms of fatigue and anxiety, as well as a possible cough and/or chest pain.\n\nTo manage the symptoms of Shortness of Breath, SAMI-Aid Medical professionals recommend sitting in a chair with bent knees and relaxed shoulders, head and neck. Place your hand on your belly. Breathe in slowly through your nose. As you exhale, tighten your muscles, Put more emphasis on the exhale than the inhale. Repeat for about five minutes. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Shortness of breath and are you ready for your online visit?',
        'Swelling in your feet and ankles',
        'Trouble breathing when you lie flat',
        'High fever chills and cough',
        'Lips or fingertips turning blue',
        'Wheezing an abnormal whistling-type so when you breathe in or out',
        'Stridor a high-pitched noise taht occurs breathing',
        'Worsening of pre-exiting shortness of after using ingalers',
        "Breathlessness that doesn't stop after 30 minutes of rest",
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p11',
        'Dehydration',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Dehydration is caused by not drinking enough fluid or by losing more fluid than you take in. Fluid is lost through sweat, tears, vomiting, urine or diarrhea. The most common cause of dehydration in young children is severe diarrhea and vomiting . Older adults naturally have a lower volumne of water in their bodies and may have conditions or take medications that increase the risk of dehydration.\n\nTo manage the symptoms of Dehydration, SAMI-Aid Medical professionals recommend people who are dehydrated to take in fluids by sipping small amounts of water. Drink carbohydrate/electrolyte-containing drinks. Suck on popsicles made from juices and sports drinks. If your or someone you know shows signs of heat exposure or has an elevated temperature, try to cool the person down by removing any excess clothing and loosen other clothing. Find an air-conditioned area to return the body temperature back to normal and break the heat exposure cycle. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Dehydration and are you ready for your online visit?',
        'Dry mouth',
        'Eyes stop making tears',
        'Sweting may stop',
        'Muscle cramps',
        'Nausea and vomiting',
        'Heart palpitations',
        'Lightheadeness (especially when standing)',
        'Weakness',
        'Decreased urine output',
        null,
        null,
        null
    ),
    new Illness(
        'p12',
        'Sprains & Strains',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "A sprain is a stretching or tearing of ligaments; ligaments are the tough bands of fibrous tissue that connect two bones together in your joints. The most common location for a sprain is in your ankle. The difference between a sprain and strain is that a sprain injures the bands of tissue that connect two bones together, while a strain involves an injury to a muscle or to the band of tissue that attaches a muscle to a bone. Pain and swelling that result from a sprained ligament usually last for a few fays, and most sprains heal in four to six weeks. The acronym RICE can be used to remember the recommended treatement for a mild sprain: Rest; try not to move the impacted ligament. Ice; apply ice packs immediately after a sprain to reduce swelling. Leave ice packs on for 20-30 minutes at a time, up to four times per day. Compression; use wrap-around elastic bandages to help stabilize the joint and reduce pain and swelling. Elevation; elevate the ankle above the level of the heart for 48 hours after a sprain. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Sprains & Strains and are you ready for your online visit?',
        'Pain',
        'Swelling',
        'Stiffness',
        'Reduced efficiency of function',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null

    ),
    new Illness(
        'p13',
        'Cuts & Wounds',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Wounds can be caused by something sudden, such as a cut, a burn, a fall or a bad knock. People often have a wound after surgery. Wounds can be caused by infections, such as infections after surgery and infections by insect bites. Wounds can be caused by being immobile, such as bed sores or pressure injury.\n\nTo manage the symptoms of a Cut or Wound, SAMI-Aid Medical professionals recommend that you apply a bandage or dressing directly to the cut or wound, it will clot immediately. Drinking turmeric milk can accelerate the healing process. It's also noted that crushed garlic cloves will also stop bleeding and reduce pain. Aloe Vera gel has anti-inflammatory and soothing properties that ease the tightness of the skin, reducing pain and swelling. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Cuts & Wounds and are you ready for your online visit?',
        'Looks very deep',
        'Is more than a half-inch long',
        "Opens so wide that you can't get the edge together",
        'Has ragged edges',
        'Has debris in it such as dirt glass or grave',
        'Bleeds enough to soak through a bandage',
        'Keep bleeding even after applying direct pressure for 5 to 10 minutes',
        'Spurts blood',
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p14',
        'Ear Pain',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Ear infections are the most common cause of ear pain. When the ear becomes infected, inflammation and buildup of pressure cause pain that can be intense. People with ear infections often have other symptomsm such as sinus pressure or a sore throat because infections from nearby areas may affect the ear. An ear infection can also be a standalone condition. Most ear infections are bacterial, not viral. Only a doctor can diagnose an ear infection.\n\nTo manage the symptoms of Ear Pain, SAMI-Aid Medical professionals recommend over-the-counter pain relievers like ibuprofen and acetaminophen to control pain associated with a painful type of ear infection called acute otitis media (AOM). They're safe to use with or without antibiotics, but be sure to follow dosing instructions on the text. These medications can also help lower a fever. We suggest that you use ice packs or warm compresses, like a heating pad or damp washcloth, to relieve pain.",
        'Do you have a Ear Pain and are you ready for your online visit?',
        'Dull and continuius pain',
        'Sharp and sudden pains',
        'Sharp and continuous pain',
        'Muffled hearing',
        'Nausea',
        'Ear drainage',
        'Other/none of the above',
        null,
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p15',
        'Rash',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "Dermatitis is a general term that describes an inflammation of the skin. Dermatitis can have many causes and occurs in many forms. It usually involves an itchy rash on swollen, reddened skin. Skin affected by dermatitis may blister, ooze, develop a crust or flake off. Dermatitis is a common condition that's not contagious, but it can make you feel uncomfortable and self-conscious. A combination of self-care steps and medications can help you treat dermatitis.\n\nSkin allergy symptoms like redness, itching, and swelling often go away on their own in a week or two with or without treatment. You can do some things to make it more comfortable in the meantime. You shouldn't use or touch what triggers your allergy. A cool compress or shower can help calm a hot rash. Colloidal oatmeal is oatmeal ground to a powder, so it mixes well with water. It can calm inflamed skin for some pepople, Try using an add anti-itch cream. Over-the-counter hydrocortisone or calamine lotion may relieve itching. Don't waer tight clothes, as they can irritate your rash. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Rash and are you ready for your online visit?',
        'Itchy ski',
        'Abnormally red skin',
        'Abnormally dry skin',
        'Blisters on skin',
        'Swelling of skin',
        'Burning sensation on the skin',
        'Infection',
        'Other/none of the above',
        null,
        null,
        null,
        null
    ),
    new Illness(
        'p16',
        'Fever without a rush',
        'Under 24 hours',
        '1-3 days ago',
        '4-7 days ago',
        '1-2 weeks',
        '1 month ago',
        'Several months ago',
        'More than one year ago',
        'I feel normal',
        'I have mild symptoms',
        'I have noticeable symptoms',
        'I have severe symptoms',
        "A fever is a temporary increase in your body's temperature, often due to an illness or infection. Having a fever is a sign that something out of the ordinary is going on in your body. For an adult, a fever may be uncomfortable, but usually isn't a cause for concern unless it reaches 103 \u00b0F (39.4 \u00b0C) or higher. For infants and toddlers, a slightly elevated temperature may indicate a serious infection. Fevers generally go away within a few days.\n\nTo manage the symptoms of Fever, SAMI-Aid Medical professionals recommend that you drink plenty of fluids. Fever can cause fluid loss and dehydration, so drink water, juices or broth. You should spend time resting. You need rest to recover, so be aware that arduous activity can raise your body temperature. Stay cool. Dress in light clothing, keep the room temperature cool and sleep with only a sheet or light blanket. If symptoms persist seek advice from a healthcare professional.",
        'Do you have a Fever without a rush and are you ready for your online visit?',
        'Low-grade fever (up to 100.4°F)',
        'Mid-grade fever (100.5°F to 102.9°F)',
        'High-grade fever (103°F or above)',
        'Other/none of the above',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    )
];

export default ILLNESSES;