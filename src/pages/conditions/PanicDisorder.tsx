import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const PanicDisorder = () => {
  return (
    <ConditionPageLayout
      title="Panic Disorder"
      subtitle="Anxiety Disorders"
      description="Panic Disorder is characterised by recurring unexpected panic attacks—sudden periods of intense fear that may include palpitations, sweating, and feelings of impending doom. These attacks can be terrifying and significantly impact quality of life. At Place of Serenity, we help you understand and overcome panic attacks."
      symptoms={[
        "Sudden and repeated panic attacks",
        "Rapid or pounding heartbeat",
        "Sweating and trembling",
        "Shortness of breath or feeling smothered",
        "Feelings of choking",
        "Chest pain or discomfort",
        "Nausea or abdominal distress",
        "Dizziness or lightheadedness",
        "Fear of losing control or 'going crazy'",
        "Fear of dying",
        "Numbness or tingling sensations",
        "Avoidance of places where attacks occurred",
      ]}
      treatments={[
        "Comprehensive evaluation to distinguish panic disorder from other medical conditions and understand your specific triggers.",
        "Medication therapy including SSRIs, SNRIs, or benzodiazepines as appropriate, with careful monitoring and adjustment.",
        "Cognitive Behavioral Therapy (CBT) focused on panic disorder to change the thinking patterns that lead to fear and anxiety.",
        "Interoceptive exposure to safely experience physical sensations of panic in a controlled setting, reducing their power.",
        "Breathing retraining and relaxation techniques to interrupt the panic cycle before it escalates.",
        "Psychoeducation about panic attacks to help you understand that they are not dangerous, reducing fear of future attacks.",
        "Development of personalised coping strategies and an action plan for managing symptoms in daily life.",
      ]}
      additionalInfo="Many people with panic disorder respond very well to treatment. Our inpatient program provides intensive support during the critical early stages of treatment, allowing you to focus fully on recovery in a safe environment."
    />
  );
};

export default PanicDisorder;
