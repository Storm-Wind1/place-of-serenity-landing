import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const Bipolar = () => {
  return (
    <ConditionPageLayout
      title="Bipolar Disorder"
      subtitle="Mood Disorders"
      description="Bipolar Disorder is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). These episodes can affect sleep, energy, activity, judgment, and the ability to think clearly. At Place of Serenity, we provide specialised treatment to help stabilise moods and improve quality of life."
      symptoms={[
        "Episodes of elevated mood or irritability (mania)",
        "Decreased need for sleep during manic episodes",
        "Racing thoughts and rapid speech",
        "Increased goal-directed activity or agitation",
        "Impulsive or risky behaviour",
        "Grandiose beliefs about abilities",
        "Depressive episodes with profound sadness",
        "Loss of interest in activities",
        "Fatigue and low energy during depression",
        "Difficulty concentrating",
        "Changes in appetite and sleep",
        "Thoughts of death or suicide during depressive episodes",
      ]}
      treatments={[
        "Comprehensive psychiatric evaluation to accurately diagnose bipolar type and develop an appropriate treatment plan.",
        "Mood stabiliser medication management (lithium, anticonvulsants) as the foundation of treatment.",
        "Antipsychotic medications when needed for acute manic episodes or as maintenance treatment.",
        "Individual psychotherapy including CBT and interpersonal therapy to develop coping strategies.",
        "Psychoeducation about bipolar disorder, including early warning signs of mood episodes.",
        "Sleep and routine regulation therapy to establish consistent daily rhythms that support mood stability.",
        "Family education and therapy to help loved ones understand and support the treatment process.",
        "Crisis intervention and safety planning for managing severe episodes.",
      ]}
      additionalInfo="With proper treatment, people with bipolar disorder can lead full, productive lives. Our inpatient program provides intensive stabilisation during acute episodes and helps establish the treatment foundation for long-term management of the condition."
    />
  );
};

export default Bipolar;
