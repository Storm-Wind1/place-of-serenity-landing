import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const Depression = () => {
  return (
    <ConditionPageLayout
      title="Depression"
      subtitle="Mood Disorder"
      description="Depression is a serious mental health condition that affects how a person feels, thinks, and functions in daily life."
      symptoms={[
        "Persistent sadness or emptiness",
        "Loss of interest or pleasure",
        "Fatigue or low energy",
        "Sleep disturbances",
        "Difficulty concentrating",
        "Feelings of hopelessness or guilt",
      ]}
      treatments={[
        "Comprehensive psychiatric assessment",
        "Medication management",
        "Individual psychotherapy",
        "Group therapy and support",
        "Relapse prevention planning",
      ]}
      additionalInfo="At Place of Serenity, treatment is personalised to ensure emotional stability and long-term recovery."
    />
  );
};

export default Depression;
