export function Compliance() {
    return (
        <section className="py-12 border-t border-white/5">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <div className="bg-slate-900/50 rounded-lg p-6 md:p-8 max-w-4xl mx-auto border border-white/5 space-y-6">

                    {/* EN */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3">
                            Legal Disclaimer & Compliance
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            This service provides activation for a media player only. We do not host, sell, or distribute any media content. Users are responsible for their own content and rights.
                            We do not endorse piracy and are not affiliated with any third-party content providers.
                        </p>
                    </div>

                    <hr className="border-white/5" />

                    {/* FR */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3">
                            AVIS JURIDIQUE
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Ce service fournit uniquement l’activation d’un lecteur multimédia. Nous n’hébergeons, ne vendons ni ne distribuons aucun contenu. L’utilisateur est responsable de ses contenus et de ses droits d’usage.
                            Nous n&apos;approuvons pas le piratage et ne sommes affiliés à aucun fournisseur de contenu tiers.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
