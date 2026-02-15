import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";


const Anxiety = () => {  
  return (
    <ConditionPageLayout
      title="Generalised Anxiety Disorder"
      subtitle="Anxiety Disorders"
      description="Generalised Anxiety Disorder (GAD) is characterised by persistent and excessive worry about various aspects of daily life. People with GAD find it difficult to control their worry and may expect the worst even when there is no apparent reason for concern. At Place of Serenity, we provide specialised treatment to help you regain control and find peace."
      symptoms={[
        "Excessive, ongoing worry that's difficult to control",
        "Restlessness or feeling on edge",
        "Being easily fatigued",
        "Difficulty concentrating or mind going blank",
        "Irritability",
        "Muscle tension",
        "Sleep problems (difficulty falling or staying asleep)",
        "Overthinking plans and solutions",
        "Perceiving situations as threatening when they aren't",
        "Difficulty handling uncertainty",
      ]}
      treatments={[
        "Thorough psychiatric assessment to understand the nature and triggers of your anxiety and any co-occurring conditions.",
        "Medication management using anxiolytics and antidepressants when appropriate, carefully monitored for effectiveness.",
        "Cognitive Behavioral Therapy (CBT) to identify and challenge anxiety-provoking thoughts and develop healthier thinking patterns.",
        "Exposure therapy techniques to gradually reduce sensitivity to anxiety triggers in a safe, controlled environment.",
        "Relaxation training including progressive muscle relaxation, deep breathing exercises, and mindfulness meditation.",
        "Stress management skills and coping strategies that can be applied in everyday situations.",
        "Group therapy to share experiences and learn from others managing similar challenges.",
      ]}
      additionalInfo="Our tranquil environment at Place of Serenity is specifically designed to promote calm and healing. Our team works together to address not just the symptoms of anxiety but the underlying causes, helping you build lasting resilience."
    />
  );
};


export default Anxiety;
