const stages = [
    { name: "INCIDENT", slug: "incident" },
    { name: "CONTRIBUTORY FACTOR/CAUSE", slug: "contributory_factor_cause" },
    { name: "OUTCOME", slug: "outcome" },
    { name: "TRIGGERS", slug: "triggers" },
    { name: "FOLlOW UP", slug: "follow_up" },
    { name: "PATIENT", slug: "patient" },
    { name: "REPORTER", slug: "reporter" },
];
const designation = [
    { name: "Chief Nursing Officer", slug: "chief_nursing_officer" },
    { name: "Consultant", slug: "consultant" },
    { name: "Senior Registrar", slug: "senior_registrar" },
    { name: "Registrar", slug: "registrar" },
    { name: "Physician", slug: "physician" },
    { name: "House Officer", slug: "house_officer" },
    { name: "Principal Nursing Officer", slug: "principal_nursing_officer" },
    { name: "Senior Nursing Officer", slug: "senior_nursing_officer" },
    { name: "Nursing Officer II", slug: "nursing_officer_ii" },
    { name: "Nursing Officer I", slug: "nursing_officer_i" },
    { name: "Nursing Intern", slug: "nursing_intern" },
];
const questions = [
    { question: "Date of incident", input_type: "date", stage_id: stages[0] },
    { question: "Time of  incident", input_type: "time", stage_id: stages[0] },
    {
        question: "Incident description/ How discovered",
        input_type: "textarea",
        stage_id: stages[0],
    },
    {
        question: "Category/Type of incident:",
        input_type: "category",
        stage_id: stages[0],
        options: {
            "Therapeutic / medication related events: possible errors under this are:": [
                "Incorrect medication dose",
                "Missed medication dosage",
                "Wrong or inappropriate drug or blood and its products",
                "Wrong route of administration",
                "Incorrect duration",
                "Inappropriate time",
                "Drug interaction",
                "Prescription of a drug to a patient with a known allergy to the drug",
                "Lack of documentation",
            ],
            "Procedural-related events: possible errors under this are:": [
                "Reuse of disposable items",
                "Procedure carried out without obtaining consent",
                "Use of obsolete equipment or materials",
                "Use of unsterilized equipment",
                "Incorrect blood administered (blood to the wrong patient)",
                "Wrong procedure performed on a patient",
                "Breaches of confidentiality",
                "Failure to monitor or follow up",
                "Multiple exposures to X-rays",
                "Delayed consultation/treatment",
                "Delayed procedure",
                "Poor/ Lack of documentation",
                "Failure to check the patient's identity before implementing a procedure",
            ],
            "Communication-related events: concern errors in the following categories": [
                "Poor or lack of communication between healthcare professionals and patients",
                "Inappropriate communication between healthcare professionals the and other members of healthcare team",
                "Insufficient and inadequate staff communication",
                "Poor information exchange",
                "Misreading of verbal or written instructions",
                "Failure to convey pertinent information to appropriate personnel",
            ],
            "Diagnostic-related adverse events: concern events in the following categories": [
                "Delayed diagnoses",
                "Inaccurate/ incorrect diagnosis",
                "Missed diagnosis",
                "Insufficient access to diagnostic testing tools/ or imaging studies",
                "Test interpretation mistakes",
                "Poor diagnostic evaluation",
                "Lost or missing specimen",
                "Mixing specimen",
                "Failure to document/report test results",
            ],
            "Hospital-related Issues": [
                "Intravenous site inflammation",
                "Catheter-related infections",
                "Hospital-incurred patient incidents, such as patient fall",
                "Development of pressure sores",
                "Patient abscondment",
                "Wrong management",
                "Patient with needle-stick injury",
            ],
            "Patient-Related Issues": [
                "Non-compliance with treatment regimen",
                "Failure to disclose significant medical history or allergies",
                "Insufficient patient information",
            ],
        },
    },
    {
        question: "Stages involved",
        input_type: "check",
        stage_id: stages[0],
        options: [
            "Diagnosis",
            "Procedure administration",
            "Treatment administration",
            "Monitoring/Surveillance",
            "Documentation",
        ],
    },
    {
        question: "Discovered by",
        input_type: "select",
        stage_id: stages[0],
        options: [
            "Nurse",
            "Nurse intern",
            "Deputy",
            "Director of nursing services",
            "Physician",
            "Physician-Residents",
            "Physician intern",
            "Registrar",
            "Physician-consultant",
            "Health professionals- Nursing Students",
            "Health professionals- Medical Student",
            "Health professionals- Students Others",
            "Health Assistant Attendant",
            "Patient Caregiver",
            "Patient (s) themselves",
            "Others",
        ],
    },
    {
        question: "Care Area Type/ Section within the Emergency Unit where the incidents happened:",
        input_type: "select",
        stage_id: stages[0],
        options: [
            "Triage area",
            "Acute Care Area",
            "Resuscitation Room",
            "Treatment Room",
            "Recovery Room",
        ],
    },
    {
        question: "Environmental, staffing or workflow problem:",
        input_type: "multi-select",
        stage_id: [1],
        options: [
            "Overcrowding",
            "Workload",
            "Lighting",
            "Noise",
            "Interruptions",
            "Staffing deficiencies",
            "Inefficient workflow",
            "Employee safety",
            "Insufficient staff",
            "Protracted waiting times",
            "Lack of resources/equipment",
            "Other",
        ],
    },
    {
        question: "Lack of Staff Education/sensitization",
        input_type: "multi-select",
        stage_id: [1],
        options: [
            "New or unfamiliar drugs/devices",
            "Feedback about adverse events/ prevention",
            "Omission errors",
            "Error of commission in which an incorrect course of action is taken",
            "Inaction",
            "Oversight",
            "Other",
        ],
    },
    {
        question: "Patient education problem",
        input_type: "multi-select",
        stage_id: [1],
        options: [
            "Lack of information",
            "Noncompliance",
            "Lack of investigating patient enquiries",
            "Lack of patient monitoring",
        ],
    },
    {
        question: "Miscommunication of procedure order:",
        input_type: "multi-select",
        stage_id: [1],
        options: [
            "Lack of communication of amended findings",
            "Insufficient/ inadequate communication among health professionals",
            "Information Processing Errors e.g failure to recognize and comprehend how serious the patient's condition is.",
            "Intimidation/faulty interaction",
        ],
    },
    {
        question: "Critical patient information missing:",
        input_type: "multi-select",
        stage_id: [1],
        options: [
            "Age",
            "Weight",
            "Allergies",
            "Vital signs",
            "Lab values",
            "Pregnancy",
            "Patient identity",
            "Renal/liver impairment",
            "Location",
            "Diagnosis",
            "Other",
        ],
    },
    {
        question: "Poor diagnostic evaluation:",
        input_type: "multi-select",
        stage_id: [1],
        options: [
            "Insufficient assessment",
            "Incorrect interpretation of patients’ condition or diagnostic results",
            "AllerEnvironmental/work related factors such as overcrowdinggies",
        ],
    },
    {
        question: "Severity Outcomes:",
        input_type: "select",
        stage_id: [2],
        options: [
            "Insignificant/Negligible: implies No actual damage, a lower level of care, or a shorter stay",
            "Minor: is further investigation, a higher quality of care, or a recommendation for a different practitioner or hospital service",
            "Moderate: refers to an extended stay or an additional operational procedure",
            "Major: entails prolonged stay necessitating major medical or surgical intervention",
            "Catastrophic: the death that was unexpected or avoidable or lasting impairment",
        ],
    },
    {
        question: "Upload picture of adverse occurrence",
        input_type: "image",
        stage_id: [2],
    },
    {
        question: "Intervention",
        input_type: "textarea",
        stage_id: [2],
    },
    {
        question: "Medication-Related Triggers",
        input_type: "select",
        stage_id: [3],
        options: [
            "Abnormal Tissue plasminogen activator (TPA) with values higher that 110 U/L",
            "Administration of 50% Dextrose (D50)",
            "Heparin Administration",
            "Administration of Intravenous (IV) Antihypertensives such as Nitroglycerin/ Nicardipine / Nitroprusside, hydralazine",
            "Opiates + benzodiazepine administration",
            "Administration of IV Calcium",
            "Oxygen (O2) <90% Or Partial pressure of Oxygen (SPO2)<90%, which is indicative of Hypoxemia",
            "Administration of Benadryl, an antihistamine, used to relieve symptoms of allergy, hay fever",
        ],
    },
    {
        question: "Procedure-Related Triggers",
        input_type: "select",
        stage_id: [3],
        options: [
            "Central line insertion: Only required in case of life-threatening emergencies",
            "Intubation: Only required in case of life-threatening emergencies",
            "Ultrasound (US)-guided IV: Only required in case of life-threatening emergencies",
            "Infection associated with healthcare e.g catheter infection, nosocomial infection",
            "Acute dialysis: for treatment of transitory renal failure brought on by sudden trauma (such as a car accident, the consumption of specific medicines, etc).",
            "Administration of IV Calcium",
            "Oxygen (O2) <90% Or Partial pressure of Oxygen (SPO2)<90%, which is indicative of Hypoxemia",
            "Administration of Benadryl, an antihistamine, used to relieve symptoms of allergy, hay fever",
        ],
    },
    {
        question: "Patient care-related Triggers",
        input_type: "select",
        stage_id: [3],
        options: [
            "Abnormal vital signs- Body Temperature <35 or >38 C",
            "Abnormal vital signs- Respiratory rate (RR) <10 or >24",
            "Abnormal vital signs-Heart rate (HR)>130",
            "Abnormal vital signs-Systolic Blood Pressure (SBP) >180; Diastolic Blood Pressure (DBP) >120",
            "Emergency department (ED) Boarding >6hrs: practice of keeping patients in the emergency room after the decision to admit the patients in wards due to lack of inpatient beds",
            "Emergency department (ED) length of stay (LOS) > 6 hours",
            "Abnormal Glasgow Comma scale (GCS) of 8 or less",
            "Use of Restraint",
            "Aspiration",
            "Patient fall",
            "Pneumothorax: Abnormal collapse of the lungs",
        ],
    },
    {
        question: "Laboratory-Related Triggers",
        input_type: "select",
        stage_id: [3],
        options: [
            "Leukocytosis, leukopenia, or bandemia (white blood cells > 1,200/mm3, 4,000/mm3, or > 4,000/mm3 or > 4,000/mm3 respectively).",
            "Cr >2.0 or BUN >30",
            "Partial pressure of carbondioxide (pCO2) >60",
            "BNP >300",
            "Emergency department (ED) Boarding >6hrs: practice of keeping patients in the emergency room after the decision to admit the patients in wards due to lack of inpatient beds",
            "Emergency department (ED) length of stay (LOS) > 6 hours",
            "Abnormal Glasgow Comma scale (GCS) of 8 or less",
            "Use of Restraint",
            "Aspiration",
            "Patient fall",
            "Pneumothorax: Abnormal collapse of the lungs",
        ],
    },
    {
        question: "Action Taken",
        input_type: "textarea",
        stage_id: 5,
    },
    {
        question: "Comments/Recommendations",
        input_type: "textarea",
        stage_id: 5,
    },
    {
        question: "Age Category",
        input_type: "select",
        stage_id: 6,
        options: [
            "Neonates- 0-28 days",
            "Paediatric- 29 days to 17 years",
            "Adult-18 years to 64 years",
            "Geriatric-65 years and older,",
        ],
    },
];
//# sourceMappingURL=data.js.map