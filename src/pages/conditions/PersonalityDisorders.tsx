import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const PersonalityDisorders = () => {
  return (
    <ConditionPageLayout
      title="Personality Disorders"
      subtitle="Mental Health Condition"
      description="Personality disorders involve enduring patterns of behaviour and inner experience that affect relationships and functioning."
      symptoms={[
        "Emotional instability",
        "Impulsive behaviour",
        "Difficulty maintaining relationships",
        "Distorted self-image",
        "Chronic feelings of emptiness",
      ]}
      treatments={[
        "Long-term psychotherapy",
        "Behavioural interventions",
        "Medication support where needed",
        "Structured therapeutic environment",
      ]}
      additionalInfo="Treatment focuses on emotional regulation, self-awareness, and healthier relationships."
    />
  );
};

export default PersonalityDisorders;
