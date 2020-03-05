exports.seed = function(knex, Promise) {
  return knex('strains').insert([
    {
      name: '303 Kush',
      description:
        "For lovers of Bubba Kush, this strain is a must-try, especially for the aroma and taste package, which is potent and reminds us of the best examples of that strain we've ever had. The effect is a little more uplifting and active than Bubba traditionally is, but this 303 still had quality body relaxation properties that made the incredible mood it put us in even more enjoyable.",
      aroma:
        "We were definitely 'wowed' by the aroma that this Colorado-born cross possessed, as it was extremely pungent and reminded us of some of the best coffee-chocolate Bubbas we've had. There were notes of smokey bourbon, anise, and a backing sharp chemmy quality that came out post-grind, making this one of the most complex aromas we've encountered in some time. If you're a fan of the dank, spicy smells of Bubba Kush, this strain will likely surpass most examples of pure Bubba in your mind's eye, as it has in ours.",
      qualities:
        "One word kept coming up during our reviews of this strain, and that was 'fun' — this one just really improved our moods almost immediately, making us feel social, extroverted, and creative. It definitely felt Sativa in profile to start, increasing energy and bordering on racy at times (never anxious though), with a heavily buzzing body and pressurized face/eyes. The happy mood and relaxed body which made up the majority of the experience post-30 minutes wasn't conducive to working simply because we wanted to enjoy life more than concentrate on anything. This strain was great for some mind-wandering and following your fancy, so to speak. After the main potency passed around 1.5 hours into the experience, we felt more able to actually relax and concentrate if needed, and the body relaxation feelings increased"
    },
    {
      name: '32 ("Three-two")',
      description:
        'Albert Walker is a legendary clone-only Afghani skunk variety, while Manic is also an old-school Afghani, though with a sugary sweet smell.  The combination of the two creates a hard-hitting yet very positive Indica hybrid that yields welland exudes a lemon-garlic aroma.',
      aroma: 'Pungent mix of lemon, garlic, and body odor funk when ground',
      qualities:
        "Though it's a strongly Indica-dominant strain, it seems to shift its effects depending upon mood and situation.  If it's midday and you're immersed in a physical activity, it'll have you feeling relaxed, happy, and capable — if you're medicating before bed, it'll ease you into restful sleep.  Potent effects package all-around; good body relaxation, sleep aid, relief from minor pain, and ocular attention."
    }
  ]);
};
