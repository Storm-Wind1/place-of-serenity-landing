import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const Anxiety = () => {
  return (
    <ConditionPageLayout
      title="Generalised Anxiety Disorder"
      subtitle="Anxiety Disorder"
      description="Generalised Anxiety Disorder involves persistent and excessive worry that interferes with daily functioning."
      symptoms={[
        "Excessive worry",
        "Restlessness",
        "Muscle tension",
        "Difficulty sleeping",
        "Irritability",
        "Poor concentration",
      ]}
      treatments={[
        "Psychiatric evaluation",
        "Cognitive behavioural therapy",
        "Medication where indicated",
        "Stress management techniques",
        "Ongoing monitoring and support",
      ]}
      additionalInfo="Our multidisciplinary team focuses on restoring calm, confidence, and emotional balance."
    />
  );
};

export default Anxiety;
