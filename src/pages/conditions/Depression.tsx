import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const Depression = () => {
  return (
    <ConditionPageLayout
      title="Depression"
      subtitle="Mental Health Condition"
      description="Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that affects how you feel, think, and handle daily activities. At Place of Serenity, we understand that depression is a medical condition that requires professional treatment and compassionate care."
      symptoms={[
        "Persistent feelings of sadness or emptiness",
        "Loss of interest in activities once enjoyed",
        "Changes in appetite and weight",
        "Sleep disturbances (insomnia or oversleeping)",
        "Fatigue and loss of energy",
        "Feelings of worthlessness or guilt",
        "Difficulty concentrating or making decisions",
        "Thoughts of death or suicide",
        "Physical symptoms like headaches or body aches",
        "Social withdrawal and isolation",
      ]}
      treatments={[
        "Comprehensive psychiatric evaluation to understand the type and severity of depression and develop a personalised treatment plan.",
        "Evidence-based medication management with careful monitoring by our experienced psychiatrists to find the most effective treatment.",
        "Individual psychotherapy sessions including Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy to address negative thought patterns.",
        "Group therapy sessions to connect with others who understand your experience and build a supportive community.",
        "Occupational therapy to help restore daily functioning and develop healthy routines that support recovery.",
        "Family education and support to help loved ones understand depression and participate in the recovery process.",
        "Holistic approaches including mindfulness, relaxation techniques, and lifestyle modifications to support overall well-being.",
      ]}
      additionalInfo="Our 24/7 inpatient care provides a safe, supportive environment where patients can focus entirely on their recovery. Each patient receives a personalised care plan developed by our multidisciplinary team of psychiatrists, psychologists, social workers, and occupational therapists."
    />
  );
};

export default Depression;
