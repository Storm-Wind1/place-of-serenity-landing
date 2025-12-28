import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const PanicDisorder = () => {
  return (
    <ConditionPageLayout
      title="Panic Disorder"
      subtitle="Anxiety Disorder"
      description="Panic disorder is characterised by sudden and repeated panic attacks involving intense fear and physical symptoms."
      symptoms={[
        "Sudden intense fear",
        "Chest pain or palpitations",
        "Shortness of breath",
        "Dizziness",
        "Fear of losing control",
      ]}
      treatments={[
        "Accurate diagnosis and assessment",
        "Medication stabilisation",
        "Psychotherapy",
        "Relaxation and grounding techniques",
        "Relapse prevention planning",
      ]}
      additionalInfo="With proper treatment, panic attacks can be effectively managed or eliminated."
    />
  );
};

export default PanicDisorder;
