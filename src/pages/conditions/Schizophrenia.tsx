import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const Schizophrenia = () => {
  return (
    <ConditionPageLayout
      title="Schizophrenia"
      subtitle="Psychotic Disorder"
      description="Schizophrenia is a complex mental health condition that affects perception, thinking, emotions, and behaviour."
      symptoms={[
        "Hallucinations",
        "Delusions",
        "Disorganised thinking",
        "Social withdrawal",
        "Reduced emotional expression",
      ]}
      treatments={[
        "Medication management",
        "Psychiatric supervision",
        "Therapeutic support",
        "Structured daily routines",
        "Family education and support",
      ]}
      additionalInfo="Long-term treatment and monitoring help individuals maintain stability and quality of life."
    />
  );
};

export default Schizophrenia;
