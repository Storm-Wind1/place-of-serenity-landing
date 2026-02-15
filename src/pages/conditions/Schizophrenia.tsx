import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const Schizophrenia = () => {  
  return (
    <ConditionPageLayout
      title="Schizophrenia"
      subtitle="Psychotic Disorders"
      description="Schizophrenia is a serious mental illness that affects how a person thinks, feels, and behaves. People with schizophrenia may experience hallucinations, delusions, and disorganised thinking that can significantly impair daily functioning. At Place of Serenity, we provide comprehensive, compassionate care for individuals living with schizophrenia."
      symptoms={[
        "Hallucinations (hearing or seeing things not there)",
        "Delusions (fixed false beliefs)",
        "Disorganised thinking and speech",
        "Extremely disorganised or abnormal motor behaviour",
        "Negative symptoms (reduced emotional expression)",
        "Social withdrawal",
        "Lack of motivation",
        "Difficulty with attention and memory",
        "Neglect of personal hygiene",
        "Flat affect (reduced emotional responsiveness)",
      ]}
      treatments={[
        "Thorough psychiatric evaluation including medical history, symptom assessment, and diagnostic testing.",
        "Antipsychotic medication management with careful selection, dosing, and monitoring for optimal symptom control and minimal side effects.",
        "Individual therapy to help develop coping strategies, improve insight, and work toward personal recovery goals.",
        "Cognitive remediation therapy to improve attention, memory, and problem-solving abilities.",
        "Social skills training to enhance communication and interpersonal relationships.",
        "Family therapy and education to help loved ones understand schizophrenia and provide effective support.",
        "Occupational therapy to restore daily living skills and prepare for independent functioning.",
        "Coordinated care planning for smooth transition and continuity of care after discharge.",
      ]}
      additionalInfo="While schizophrenia requires long-term treatment, many people with this condition lead fulfilling lives with proper care. Our multidisciplinary team works together to address all aspects of the illness and support your journey toward stability and recovery."
    />
  );
};

export default Schizophrenia;
